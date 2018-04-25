// var jspdf = require("jspdf");
// var pdfjsLib = require('pdfjs-dist');
// console.log(pdfjsLib);
var pdfjsLib = window['pdfjsLib'];
pdfjsLib.GlobalWorkerOptions.workerSrc = 'libs/pdf.worker.min.js';


var pdfDoc = null,
  pageNum = 1,
  pageRendering = false,
  pageNumPending = null,
  scale = 0.8,
  canvas = document.getElementById('preview'),
  ctx = canvas.getContext('2d');

window.render = function () {
  console.log("click");
  var doc = new jspdf();
  doc.text(20, 20, 'Hello landscape world!');
  var out = doc.output("arraybuffer");
  console.log(out);


  var loadingTask = pdfjsLib.getDocument({ data: out });

  loadingTask.promise.then(function (pdf) {
    console.log('PDF loaded');

    // Fetch the first page
    var pageNumber = 1;
    pdf.getPage(pageNumber).then(function (page) {
      console.log('Page loaded');

      var scale = 1.5;
      var viewport = page.getViewport(scale);

      // Prepare canvas using PDF page dimensions
      var canvas = document.getElementById('preview');
      var context = canvas.getContext('2d');
      canvas.height = viewport.height;
      canvas.width = viewport.width;

      // Render PDF page into canvas context
      var renderContext = {
        canvasContext: context,
        viewport: viewport
      };
      var renderTask = page.render(renderContext);
      renderTask.then(function () {
        console.log('Page rendered');
      });
    });
  }, function (reason) {
    // PDF loading error
    console.error(reason);
  });
}
