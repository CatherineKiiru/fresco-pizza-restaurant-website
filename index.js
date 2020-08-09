window.onload=function(){
    var inputs = document.getElementsByClassName('sum'),
        total  = document.getElementById('payment-total');
    
     for (var i=0; i < inputs.length; i++) {
        inputs[i].onchange = function() {
            var add = this.value * (this.checked ? 1 : -1);
            total.innerHTML = parseFloat(total.innerHTML) + add
            var new_total = parseFloat(document.getElementById('input').value);
          console.log(new_total);
            document.getElementById('input').value=new_total + add
        }
      }
    }
