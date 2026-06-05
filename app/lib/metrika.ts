// Фиксируем твой реальный номер счетчика
const METRIKA_ID = 16442995;

/**
 * Безопасно отправляет цель (событие)
 */
export const reachMetrikaGoal = (targetName: string) => {
    if (typeof window !== "undefined" && window.ym) {
        window.ym(METRIKA_ID, "reachGoal", targetName);
    }
};

/**
 * Безопасно отправляет просмотр страницы (хит)
 */
export const trackMetrikaHit = (url: string) => {
    if (typeof window !== "undefined" && window.ym) {
        window.ym(METRIKA_ID, "hit", url);
    }
};