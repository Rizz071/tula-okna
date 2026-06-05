"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { trackMetrikaHit } from "@/app/lib/metrika"; // Импортируем наш безопасный метод

export default function YandexMetrika() {
    const pathname = usePathname();
    const searchParams = useSearchParams();

    useEffect(() => {
        // Превращаем параметры в строку
        const currentParams = searchParams.toString();

        // Формируем чистый URL: если параметров нет, не пишем "?" в конце
        const url = currentParams ? `${pathname}?${currentParams}` : pathname;

        // Вызываем централизованный метод трекинга
        trackMetrikaHit(url);
    }, [pathname, searchParams]);

    return null;
}
