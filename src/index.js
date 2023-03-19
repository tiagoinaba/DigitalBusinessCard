export function copyEmail() {
    navigator.clipboard.writeText('tiago.inaba@gmail.com')
        .then(() => {
            console.log("Copied!")
        })
        .catch(() => {
            console.log("Failed!")
        })
}