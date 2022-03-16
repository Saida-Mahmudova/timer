const args = process.argv.splice(2);

for (let i of args) {
  if (i >= 0) {
    setTimeout(() => {
      process.stdout.write(`${i} seconds\x07 \n`);
    }, i * 1000);
  }
}