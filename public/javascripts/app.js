$('#cal_form').on('submit',e => {
  const values = $('#cal_form').serializeArray();
  const num_1 = values.find(e => e['name'] == 'num_1');
  const num_2 = values.find(e => e['name'] == 'num_2');
  if (!num_1 || !num_2){
    e.preventDefault();
    alert('Không nhận được giá trị cho phép tính');
  }
});