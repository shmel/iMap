<?

  $time = time();
  header("Pragma: public");
  header("Cache-Control: must-revalidate, post-check=0, pre-check=0");
  header("Content-type: application/pdf");
  header("Content-Disposition: attachment; filename=\"grid_$time.pdf\"");
  $exportedData = $_POST['exp'];
  echo $exportedData;

  ?>