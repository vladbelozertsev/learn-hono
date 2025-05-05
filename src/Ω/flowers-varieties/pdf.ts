import PDFDocument from "pdfkit-table";

app.get("api/pdf", async (c) => {
  const table = {
    title: "Tablica 1",
    subtitle: "opisanie",
    headers: ["Country", "Conversion rate", "Trend"],
    rows: [
      ["Switzerland", "12%", "+1.12%"],
      ["France", "67%", "-0.98%"],
      ["England", "33%", "+4.44%"],
    ],
  };

  let doc = new PDFDocument({ margin: 30, size: "A4" });
  // A4 595.28 x 841.89 (portrait) (about width sizes)
  // width
  doc.font("pdfkit/roboto.ttf");
  doc.info.Title = "Test Document";
  const asd22 = "Счет на оплату!";
  doc.text(asd22, { align: "center" });

  await doc.table(table, {
    width: 500,
  });

  // or columnsSize
  await doc.table(table, {
    columnsSize: [200, 100, 100],
  });
  // done!

  const asd = doc.y + 35;
  const fontSize = 22;
  const height = 100;
  doc.fontSize(20).text("22.01.2025!", doc.x + 20, asd + (height - fontSize) / 2);

  doc.image("private/1742829153-cbb96e295d2ace.jpg", 400, asd, { width: 100, height });

  // doc.rect(30, 30, 550, 1000).stroke("#0032ff");

  // doc.fontSize(25).fillColor("#0F0").text("SERVICE REPORT", { align: "center" });

  // doc.fontSize(12).fillColor("#000").text("CONTACT NAME : ", 60, 120);
  // doc.fontSize(12).rect(200, 117, 370, 15).stroke("#000").text("Text ", 220, 120);

  // doc.fontSize(12).text("JOB TITLE : ", 60, 150);
  // doc.fontSize(12).rect(200, 147, 370, 15).stroke("#000").text("Text ", 220, 150);

  // doc.fontSize(12).text("JOB DETAIL : ", 60, 180);
  // doc.fontSize(12).rect(200, 177, 370, 15).stroke("#000").text("TUE NOV 01-11-2022 ", 220, 180);

  doc.end();
  return c.body(doc as any);
});

/**
 *
 *
 * https://stackoverflow.com/questions/73088047/pdfkit-how-to-align-images-in-one-line
 */
