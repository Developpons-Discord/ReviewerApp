<script lang="ts">
	import { Button, Checkbox, Input, Label, Modal } from 'flowbite-svelte';

	let cgu       = false;
	let cguOpened = false;

	const register = (event: SubmitEvent) => {
		const data = new FormData(event.target as HTMLFormElement);
		console.log({
			username: data.get('username'),
			email: data.get('email'),
			password: data.get('password'),
			confirmPassword: data.get('confirmPassword'),
			cgu: data.get('cgu'),
		});
	}
</script>

<svelte:head>
	<title>S'inscrire</title>
</svelte:head>

<form class='flex flex-col space-y-6' on:submit|preventDefault={register}>
	<Label class='space-y-2'>
		<span>Nom d'utilisateur</span>
		<Input type='username' placeholder='JohnDoe' name='username' required />
	</Label>

	<Label class='space-y-2'>
		<span>Email</span>
		<Input type='email' placeholder='nom@exemple.com' name='email' required />
	</Label>

	<Label class='space-y-2'>
			<span>
				Mot de passe
			</span>

		<Input type='password' placeholder='••••••' name='password' required />
	</Label>

	<Label class='space-y-2'>
			<span>
				Confirmer le mot de passe
			</span>

		<Input type='password' placeholder='••••••' name='confirmPassword' required />
	</Label>

	<Checkbox bind:checked={cgu} name='cgu' required>
		J'accepte les&nbsp;
		<button on:click|preventDefault={() => cguOpened = true} class='text-sm text-primary-500 hover:underline'>conditions
			générales
			d'utilisation
		</button>
		&nbsp;du site.
	</Checkbox>

	<Button type='submit' class='w-full'>
		S'inscrire
	</Button>
</form>

<Modal title="Conditions générales d'utilisation" bind:open={cguOpened} autoclose outsideclose>
	<p>
		Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
		aliqua. Turpis in eu mi bibendum neque egestas. Risus viverra adipiscing at in tellus integer. Viverra aliquet eget
		sit amet tellus cras. Sollicitudin ac orci phasellus egestas tellus. Adipiscing elit ut aliquam purus sit amet
		luctus venenatis. Cras semper auctor neque vitae tempus quam pellentesque. Mauris rhoncus aenean vel elit
		scelerisque. Ut venenatis tellus in metus vulputate eu scelerisque felis imperdiet. Faucibus et molestie ac feugiat
		sed lectus vestibulum mattis ullamcorper. Aliquam ut porttitor leo a diam. Urna molestie at elementum eu facilisis
		sed odio. Ut tortor pretium viverra suspendisse. Feugiat pretium nibh ipsum consequat nisl vel pretium. Molestie
		nunc non blandit massa. Netus et malesuada fames ac. Ac auctor augue mauris augue neque gravida in fermentum et.
		Ipsum a arcu cursus vitae congue mauris. Massa enim nec dui nunc mattis. Purus semper eget duis at tellus at urna
		condimentum mattis.<br />
		Et netus et malesuada fames. Aliquam ut porttitor leo a diam sollicitudin tempor. Velit laoreet id donec ultrices
		tincidunt arcu non. Nunc sed id semper risus in hendrerit gravida. Nam aliquam sem et tortor consequat id.
		Adipiscing diam donec adipiscing tristique risus nec. Nisl condimentum id venenatis a condimentum. Mi quis hendrerit
		dolor magna eget est. Elementum integer enim neque volutpat ac tincidunt vitae semper quis. Faucibus vitae aliquet
		nec ullamcorper. Et leo duis ut diam quam nulla. Cum sociis natoque penatibus et magnis dis parturient montes.
		Aliquam vestibulum morbi blandit cursus risus at. Egestas dui id ornare arcu odio ut sem. Porttitor lacus luctus
		accumsan tortor posuere ac ut consequat semper. Vestibulum lorem sed risus ultricies tristique. Orci sagittis eu
		volutpat odio facilisis mauris. Purus sit amet volutpat consequat mauris nunc. Aliquet sagittis id consectetur purus
		ut.<br />
		Venenatis cras sed felis eget velit aliquet sagittis id. Nulla malesuada pellentesque elit eget gravida cum sociis.
		Arcu non odio euismod lacinia at quis risus sed. Cras tincidunt lobortis feugiat vivamus at augue eget. Bibendum ut
		tristique et egestas quis ipsum suspendisse ultrices gravida. Quisque egestas diam in arcu. Eu nisl nunc mi ipsum
		faucibus. Velit scelerisque in dictum non consectetur a erat nam at. Turpis egestas pretium aenean pharetra magna ac
		placerat. Aliquet enim tortor at auctor urna. Porta non pulvinar neque laoreet suspendisse interdum. Est
		pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus. Pretium quam vulputate dignissim
		suspendisse in est ante in. Ipsum dolor sit amet consectetur adipiscing elit ut aliquam. Ac orci phasellus egestas
		tellus rutrum tellus pellentesque eu. Vitae turpis massa sed elementum tempus egestas sed. Non tellus orci ac auctor
		augue mauris augue neque.<br />
		Tellus mauris a diam maecenas sed enim ut. Pellentesque elit eget gravida cum sociis natoque penatibus et magnis.
		Praesent semper feugiat nibh sed pulvinar proin. Sollicitudin ac orci phasellus egestas tellus rutrum tellus
		pellentesque eu. A diam maecenas sed enim ut sem. Ut placerat orci nulla pellentesque dignissim enim sit amet
		venenatis. Auctor neque vitae tempus quam pellentesque nec nam aliquam sem. Nisi scelerisque eu ultrices vitae
		auctor eu augue ut. Mi sit amet mauris commodo. Ullamcorper morbi tincidunt ornare massa.<br />
		Augue neque gravida in fermentum et sollicitudin ac orci phasellus. Non enim praesent elementum facilisis leo vel
		fringilla. Quam pellentesque nec nam aliquam sem et tortor consequat id. Nisl tincidunt eget nullam non nisi est.
		Egestas pretium aenean pharetra magna ac placerat. Nisl nisi scelerisque eu ultrices vitae auctor. Suspendisse sed
		nisi lacus sed viverra tellus in hac. Vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt. Erat
		imperdiet sed euismod nisi porta lorem mollis aliquam. Varius vel pharetra vel turpis nunc eget. Fermentum posuere
		urna nec tincidunt praesent semper feugiat nibh sed. Sed viverra ipsum nunc aliquet. Morbi tincidunt augue interdum
		velit euismod in pellentesque massa. Mattis aliquam faucibus purus in. In hac habitasse platea dictumst. Auctor urna
		nunc id cursus metus aliquam. Feugiat in fermentum posuere urna nec. Ipsum faucibus vitae aliquet nec ullamcorper
		sit amet. Ultrices tincidunt arcu non sodales neque.<br />
		Et malesuada fames ac turpis egestas integer eget aliquet nibh. Arcu non odio euismod lacinia at quis risus.
		Volutpat consequat mauris nunc congue. Lorem sed risus ultricies tristique nulla aliquet enim. Commodo sed egestas
		egestas fringilla phasellus. Vel turpis nunc eget lorem. Ultrices dui sapien eget mi proin sed libero enim sed.
		Magna etiam tempor orci eu. At elementum eu facilisis sed odio morbi quis commodo odio. Phasellus vestibulum lorem
		sed risus. Proin libero nunc consequat interdum varius sit.<br />
		Penatibus et magnis dis parturient montes. Lectus quam id leo in vitae turpis massa. Arcu cursus vitae congue mauris
		rhoncus aenean vel elit scelerisque. Ac felis donec et odio pellentesque diam. Ultrices neque ornare aenean euismod
		elementum nisi quis eleifend. Morbi leo urna molestie at elementum eu facilisis sed. Lacus sed turpis tincidunt id
		aliquet risus feugiat in. Id neque aliquam vestibulum morbi. Enim neque volutpat ac tincidunt vitae semper quis
		lectus. Habitasse platea dictumst vestibulum rhoncus est pellentesque.<br />
		Mattis nunc sed blandit libero volutpat sed cras ornare. In fermentum posuere urna nec tincidunt praesent semper. Eu
		turpis egestas pretium aenean pharetra magna ac. In hac habitasse platea dictumst vestibulum rhoncus est. Semper
		eget duis at tellus at urna condimentum. Mollis nunc sed id semper risus in. Vivamus arcu felis bibendum ut
		tristique et. Leo a diam sollicitudin tempor id eu nisl. Mattis rhoncus urna neque viverra. Elit scelerisque mauris
		pellentesque pulvinar pellentesque habitant.<br />
		Dui nunc mattis enim ut tellus elementum. Sed id semper risus in hendrerit gravida. Quis eleifend quam adipiscing
		vitae. Nulla facilisi cras fermentum odio eu feugiat pretium nibh ipsum. Risus at ultrices mi tempus imperdiet nulla
		malesuada pellentesque. At tempor commodo ullamcorper a lacus vestibulum sed. Tempor nec feugiat nisl pretium fusce
		id velit ut tortor. Egestas fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate sapien.
		Integer vitae justo eget magna fermentum iaculis eu. A erat nam at lectus urna duis. Odio tempor orci dapibus
		ultrices in iaculis nunc. Sed enim ut sem viverra aliquet eget sit. Consequat ac felis donec et odio pellentesque
		diam volutpat. Habitant morbi tristique senectus et netus. Laoreet non curabitur gravida arcu ac tortor dignissim.
		Elit ut aliquam purus sit amet luctus. Rhoncus urna neque viverra justo nec ultrices dui sapien.<br />
		Libero id faucibus nisl tincidunt eget. Vitae congue mauris rhoncus aenean vel elit scelerisque mauris. At imperdiet
		dui accumsan sit amet nulla facilisi morbi. Malesuada fames ac turpis egestas integer eget aliquet. At tellus at
		urna condimentum mattis. Lorem dolor sed viverra ipsum nunc. Quisque sagittis purus sit amet volutpat consequat
		mauris. Sed id semper risus in hendrerit gravida rutrum quisque. Sit amet risus nullam eget felis. Lectus urna duis
		convallis convallis tellus id interdum. A diam sollicitudin tempor id. Mi eget mauris pharetra et ultrices neque
		ornare aenean euismod. Pellentesque dignissim enim sit amet. Urna porttitor rhoncus dolor purus non enim.
	</p>

	<svelte:fragment slot='footer'>
		<Button on:click={() => cguOpened = false}>
			Fermer
		</Button>
	</svelte:fragment>
</Modal>