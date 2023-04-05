// Code panel
{
    const contents = `<body>\n\xa0\xa0<h1> Hi! </h1>\n\xa0\xa0<p>\n\xa0\xa0\xa0\xa0This is CS&AI\n\xa0\xa0</p>\n</body>         `

    let curr = 1
    let dir = 1
    const maxLen = contents.length

    const interval = setInterval(() => {
        const el = document.getElementById("code-panel-code")

        if (curr == maxLen) {
            dir = -1
        } else if (curr == 1) {
            dir = 1
        }

        curr = curr + dir

        el.innerText = contents.substring(0, curr)
    }, 100)
}
