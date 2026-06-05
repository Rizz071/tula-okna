"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import Script from "next/script";
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

    return (
        <>
            {/* Инициализация самого счетчика */}
            <Script id="yandex-metrika" strategy="afterInteractive">
                {`
                    (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                    m[i].l=1*new Date();
                    for (var j = 0; j < t.length; j++) {if (t[j].src === r) { return; }}
                    k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
                    (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

                    ym(16442995, "init", {
                        clickmap:false,
                        trackLinks:false,
                        accurateTrackBounce:true,
                        webvisor:false,
                        defer:true
                    });
                `}
            </Script>

            {/* Fallback для ребят с отключенным JS */}
            <noscript>
                <div>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        src="https://mc.yandex.ru/watch/16442995"
                        style={{ position: "absolute", left: "-9999px" }}
                        alt=""
                    />
                </div>
            </noscript>
        </>
    );
}
