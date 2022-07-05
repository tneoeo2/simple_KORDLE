let answers = ['ㄱㅏㄴㅏㄴ', 'ㅂㅏㄹㅏㅁ', 'ㄱㅜㄹㅡㅁ'];  //answer list
let isBoolean = true;

const jaeum = ['ㄱ','ㄴ','ㄷ','ㄹ', 'ㅁ', 'ㅂ', 'ㅅ', 'ㅇ', 'ㅈ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'];
const moeum = ['ㅏ','ㅑ','ㅓ','ㅕ', 'ㅗ', 'ㅛ', 'ㅜ', 'ㅠ', 'ㅡ', 'ㅣ', 'ㅐ', 'ㅔ'];


function choose(choices) {
	var index = Math.floor(Math.random()*choices.length);
	return index;
}

cnt = choose(answers);


const onKeyDownMoveEvent = (event) => {
	const inputEl = document.querySelector(event.target.tagName);
	
	//backspace
	if(event.KeyCode === 8){
		if(event.target.value.length !== event.target.maxLength   //입력값X 이전입력값있으면 이전요소 포커싱
		&& event.target.previousElementSibling){
		event.target.previousElementSibling.focus();
		
		}
	}
	
}

function createInput(){
	var template = `<div>
	<input class='input' type= 'text' maxlength = '1'>
	<input class='input' type= 'text' maxlength = '1' >
	<input class='input' type= 'text' maxlength = '1' >
	<input class='input' type= 'text' maxlength = '1' >
	<input class='input' type= 'text' maxlength = '1' onkeydown = 'onKeyDownMoveEvent(event)';>
	</div>`
	
	document.querySelector('#main-box').insertAdjacentHTML('beforeend', template);
	document.querySelectorAll('input').forEach(item => {
		item.addEventListener('input', (e)=>{
		word = e.data
		console.log(word);
		if(jaeum.includes(word) || moeum.includes(word)){
			var target = item.nextElementSibling;
				if(target==null){
					item.value = word;
					console.log('item value :', word);
					clickBtn();
				}else{
					console.log(item.nextElementSibling);
					target.focus();
				}
		}else{
			item.value = '';
		}	
		})		
	})
}

window.onload = createInput();

function clickBtn(){
		var input = document.querySelectorAll('.input');
		var ansCnt = 0;
		
		for (let i = 0; i < 5; i++){
			if(input[i].value == ''){
				alert('word not satisfied...')
				isBoolean = false;
				return
			
			}
		
		}
		for(let i = 0; i < 5; i++){
		if(input[i].value ==answers[cnt][i]){
			input[i].style.background = 'green';
			ansCnt++;
		}else if(answers[cnt].includes(input[i].value)){
			input[i].style.background = 'yellow';		
        }else {
			input[i].style.background = 'lightgray';
		}
			input[i].style.color = 'white';
			isBoolean = true;
			input[i].autofocus = false;
			input[i].disabled = true;
			input[i].classList.remove('input');
		}
		
		
		setTimeout(()=>{
			if(ansCnt == 5){
				alert("correct!");
				isBoolean = false;
			}
			
			if(isBoolean){
				inputCnt = document.getElementsByTagName('input').length;
				createInput();
				document.querySelectorAll('input')[inputCnt].focus();
			}
		}, 500);
		
		//for word compare
		
}


