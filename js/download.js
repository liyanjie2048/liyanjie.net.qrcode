function download(dataUrl, fileName)
{
    const a = document.createElement('a');
    a.download = fileName;
    a.href = dataUrl;
    a.click();
}
function downloadSvg(svgDataUrl)
{
    download(svgDataUrl, "qrcode.svg");
}
function downloadPng(svgDataUrl)
{
    const img = document.createElement('img');
    img.src = svgDataUrl;
    img.onload = (e) =>
    {
        const canvas = document.createElement('canvas');
        canvas.width = 1000;
        canvas.height = 1000;
        canvas.getContext('2d').drawImage(e.target, 0, 0, 1000, 1000);
        download(canvas.toDataURL("image/png"), "qrcode.png");
    }
}