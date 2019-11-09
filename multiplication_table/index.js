for (let i = 1; i < 10; i++) {
    let string = "";
    for (let y = 1; y <= i; y++) {
        string = string + `${i}*${y}=${i*y} `;
        
    }
    console.log(`${string}`);
}
