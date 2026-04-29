function uploadFile() {

    let file = document.getElementById("pdfFile").files[0];
    let status = document.getElementById("status");

    if (!file) {
        alert("اختر ملف PDF");
        return;
    }

    status.innerText = "جاري التحويل...";

    let formData = new FormData();
    formData.append("file", file);

    fetch("/convert", {
        method: "POST",
        body: formData
    })
    .then(res => res.blob())
    .then(blob => {

        let url = window.URL.createObjectURL(blob);
        let a = document.createElement("a");

        a.href = url;
        a.download = "converted.docx";
        a.click();

        status.innerText = "تم التحويل ✔";

    })
    .catch(err => {
        status.innerText = "خطأ ❌";
        console.log(err);
    });
}