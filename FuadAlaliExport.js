(function () {
    "use strict";
    function InitFunction() {
        if (!window.location.href.includes("noor.moe.gov.sa")) {
            Swal.fire({
                icon: "error22",
                title: "افتح نظام نور لاستخدام هذة الميزة",
                showCloseButton: true,
                footer: '<div style="color: blue;font-size: 14px;font-weight: bold;">موقع مجموعة برامج فؤاد العلي</div>'
            });
            return;
        }
        const RepCont = document.querySelector(".MSRS-RVC"), Contiv = RepCont == null ? void 0 : RepCont.parentElement;
        if (!RepCont || !Contiv) {
            Swal.fire({
                icon: "error22",
                title: "اضغط عرض التقرير لكي يتم تصديرة",
                showCloseButton: true,
                confirmButtonText: "إغلاق",
                footer: '<div style="color: blue;font-size: 14px;font-weight: bold;">موقع مجموعة برامج فؤاد العلي</div>'
            });
            return;
        }
        try {
            var divToRemove = document.getElementById("Fuadalali_ExportContainer");
            if (divToRemove) {
                divToRemove.remove();
            }
        } catch (e) {}
        const RepName = RepCont.id, ContDiv = document.createElement("div");
        ContDiv.setAttribute("style", "padding: 0px 10px 0px 10px;text-align: end;display: inline-flex;float: right;cursor: pointer;"), ContDiv.setAttribute("id", "Fuadalali_ExportContainer");
        for (const Element of ["pdf", "excel", "word"]) {
            const IconsCont = document.createElement("div");
            (IconsCont.name = "Fuadalali_ExportButton_" + Element);
            (IconsCont.id = "Fuadalali_ExportButton_" + Element);
            (IconsCont.title = `تصدير ${Element}`);
            if (Element == "pdf") {
                IconsCont.setAttribute("style", "cursor: pointer;");
                IconsCont.innerHTML = '<i class="fa fa-file-pdf-o" style="font-size: 35px;color: #F44336;"></i>';
            }
            else if (Element == "excel") {
                IconsCont.setAttribute("style", "margin: 0px 30px; cursor: pointer;");
                IconsCont.innerHTML = '<i class="fa fa-file-excel-o" style="font-size: 35px;color: #009688;"></i>';
            }
            else if (Element == "word") {
                IconsCont.setAttribute("style", "cursor: pointer;");
                IconsCont.innerHTML = '<i class="fa fa-file-word-o" style="font-size: 35px;color: #2196F3;"></i>';
            }
            IconsCont.addEventListener("click", () => window.$find(RepName).exportReport(Element === "excel" ? "EXCELOPENXML" : Element));
            ContDiv.append(IconsCont);
        }
        const ParentDiv = document.querySelector(".ToolBarButtonsCell");
        ParentDiv.prepend(ContDiv);
    }
    InitFunction();
})();