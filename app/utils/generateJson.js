export default function generateRandomJson() {
    const colors = [
        "#3E5AE8",
        "#4190F6",
        "#4A9DBB",
        "#09BA94",
        "#0EB85D",
        "#E69F0D",
        "#EB3C0F",
        "#EC1091",
        "#D40BEC",
        "#8424FF",
        "#580FF1",
    ];
    const result = new Array(108);

    for (let i = 0; i < result.length; i++) {
        const minOpacity = 20;
        const maxOpacity = 100;
        const opacityRange = maxOpacity - minOpacity;
        let opacity;

        do {
            opacity = Math.floor(Math.random() * (opacityRange + 1)) + minOpacity;
        } while (i > 0 && Math.abs(opacity - result[i - 1].opacity) < 5);

        const color = colors[Math.floor(Math.random() * colors.length)];
        result[i] = { opacity, color };
    }

    return result;
}