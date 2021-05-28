export const uniqueKey = () => {
    const randomNumber = Math.round(Math.random()*1000000);
    const uniqueKey = Date.now() + randomNumber;
    return uniqueKey;
}