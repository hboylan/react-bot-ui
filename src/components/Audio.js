class Audio {
	constructor(onSpeechStart, onResult, onError) {
		const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
		this.recognition = new SpeechRecognition();
		
		// basic config
		this.recognition.lang = 'en-US';
		this.recognition.interimResults = false;
		this.recognition.maxAlternatives = 1;
		
		// event config
		this.recognition.addEventListener('speechstart', onSpeechStart);
		this.recognition.addEventListener('speechend', this.recognition.stop);
		this.recognition.addEventListener('result', onResult);
		this.recognition.addEventListener('error', onError);
	}

	listen() {
		this.recognition.start();
	}
}

export default Audio;