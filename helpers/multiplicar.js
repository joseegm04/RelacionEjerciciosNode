const multiplicar = async (base) => {
    return new Promise((resolve, reject) => {
        try {
            let resultStream = `<head><link rel="stylesheet" href="/stylesheets/style.css"></head><body><table><tr><th>Base</th><th>X</th><th>Resultado</th></tr>`;
            for (let i = 1; i <= 10; i++) {
                resultStream += `<tr><td>${base}</td><td>${i}</td><td>${base * i}</td></tr>`;
            }
            resultStream += '</table></body>';
            resolve(resultStream);
        } catch (error) {
            reject(error);
        }
    });
}

module.exports = {multiplicar}