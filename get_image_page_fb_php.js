javascript:(() => {
    function findLink() {
        const link = [];
        document.querySelectorAll('a').forEach(((value, key) => {
            if (document.querySelectorAll('a')[key].href) {
                if (document.querySelectorAll('a')[key].href.split('/').length === 4) {
                    if (document.querySelectorAll('a')[key].href.split('/')[3].includes('photo.php')) {
                        link.push(document.querySelectorAll('a')[key][Object.keys(document.querySelectorAll('a')[key])[0]].memoizedProps.children.props.children.props.children[0].props.src)
                    }
                }
            }
        }))
        link.length
        return link
    }

    function downloadLink(link) {
        const uid = window.location.href.split('/')[3].split('?')[0];
        const file = new Blob([JSON.stringify(link)], {type: 'text/plain'});
        const url = window.URL.createObjectURL(file);
        const b = document.createElement("a");
        b.style.display = "none";
        b.href = url;
        b.setAttribute("download", `${uid}-phamthanhnam.com.txt`);
        b.download = `${uid}-phamthanhnam.com.txt`;
        document.body.appendChild(b);
        b.click();
        window.URL.revokeObjectURL(url);
    }
    var i = 0;
    function pageScroll() {
        i += 2;
        const canvas = document.querySelectorAll('img').length;
        window.scrollBy(0, 1000);
        if (i > canvas) {
            const link = findLink();
            downloadLink(link);
            return;
        }
        setTimeout(pageScroll, 100);
    }

    pageScroll()
})()
