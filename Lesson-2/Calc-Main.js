		function sumValues()
		{
			// var num1, num2, res;
			// num1=Number(document.formcalc.Number1.value);
			// num2=Number(document.formcalc.Number2.value);
			// res=num1+num2;
			// document.formcalc.txtres.value=res;

			var num1, num2, num3, res;
			num1=Number(document.formcalc.Number1.value);
			num2=Number(document.formcalc.Number2.value);
			num3=Number(document.formcalc.Number3.value);
			res=num1+num2+num3;
			document.formcalc.txtres.value=res;
		}

		function calc() {
			var a = parseInt(document.querySelector("#value1").value);
			var b = parseInt(document.querySelector("#value2").value);
			var op = document.querySelector("#opt").value;
			var calculate;

			if (op == "add") {
				calculate = a + b;
			} else if (op == "min") {
				calculate = a - b;
			} else if (op == "div") {
				calculate = a / b;
			} else if (op == "mul") {
				calculate = a * b;
			}

			document.querySelector("#result2").value = calculate;
		}
