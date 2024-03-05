
import clickSound from '@/assets/sounds/clickBubble.wav';

let lastClickTime = 0;

export const useAudio = () => {
    const now = Date.now();
    if (now - lastClickTime >= 500) { // Permettre l'exécution si plus de 0.5s se sont écoulées
        lastClickTime = now;

        // Jouer l'audio
        if (typeof window !== "undefined" && typeof Audio !== "undefined") {
            const clickAudio = new Audio(clickSound);
            clickAudio.volume = 0.2;
            clickAudio.play().catch(e => console.error("Erreur lors de la lecture de l'audio:", e));
        }
    }
};
