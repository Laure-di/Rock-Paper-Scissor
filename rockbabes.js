$(document).ready(function(){
	$('#resultat-page').hide()
	let machineChoiceList = ['pierre', 'feuille', 'ciseaux']
	function pickRandomly(){
		return machineChoiceList[Math.floor(Math.random()*machineChoiceList.length)]
	}
	$('#validate-player-choice').click(function(){
		$('#jeu').hide()
		$('#resultat-page').show()
		let playerChoiceIs = $("input[name = game-choice]:checked").val()
		console.log(playerChoiceIs)
		machineChoice = pickRandomly();
		console.log(machineChoice)
		$('#computer-choice').text("Le joueur 2 a choisi : " + machineChoice)
		if (playerChoiceIs == 'pierre' && machineChoice == 'ciseaux' || playerChoiceIs == 'feuille' && machineChoice == 'pierre' || playerChoiceIs == 'ciseaux' && machineChoice == 'feuille' ) {
			$('#resultat').text("C'est gagné!")
		} else if (playerChoiceIs == machineChoice) {
			$('#resultat').text("Egalité")
		}else{
			$('#resultat').text("Perdu!")
		}

	})
	$('#replay').click(function(){
		$('#resultat-page').hide()
		$('#jeu').show()
		
	})
})

