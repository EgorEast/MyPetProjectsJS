const reactComponent = React.Component;
const ce = React.createElement;

class App extends reactComponent {
	constructor() {
		super();
		this.state = {
			completedForm: false,
			firstNameField: '',
			lastNameField: '',
			phoneNumberField: '',
			emailField: '',
			passwordField: '',
			repeatPasswordField: '',
			registerButton: true,
		};

		this.errorField = null;
	}

	validate(reg = /reg/, value = '', fieldName = '', errName = '') {
		this.errorField = value.match(reg) ? null : errName;
		this.setState({ [fieldName]: value });
	}

	isValidForm() {
		return !(
			this.state.firstNameField &&
			this.state.lastNameField &&
			this.state.phoneNumberField &&
			this.state.emailField &&
			this.state.passwordField &&
			this.state.repeatPasswordField
		);
	}

	render() {
		if (!this.state.completedForm) {
			return ce(
				'div',
				{
					key: 'form',
					className: 'form',
				},
				[
					ce('div', {
						key: 'leftRegion',
						className: 'left-region',
					}),
					ce(
						'div',
						{
							key: 'formContainer',
							className: 'form-container',
						},
						ce(
							'div',
							{
								key: 'headerForm',
								className: 'form-header',
							},
							'Form'
						),
						[
							ce(
								'div',
								{
									key: `firstNameContainer`,
									className: `element-container`,
								},
								[
									ce(
										'div',
										{
											key: `headingFirstNameInput`,
											className: `heading-input`,
										},
										'First Name'
									),
									ce('input', {
										key: `FirstNameInput`,
										className: `heading-input`,
										placeholder: 'Alex',
										value: this.state.firstNameField,
										onChange: (event) => {
											this.validate(
												/^[A-ZА-Я][a-zа-я]+$/,
												event.target.value,
												'firstNameField',
												'First Name'
											);
										},
									}),
								]
							),
							ce(
								'div',
								{
									key: `lastNameContainer`,
									className: `element-container`,
								},
								[
									ce(
										'div',
										{
											key: `headingLastNameInput`,
											className: `heading-input`,
										},
										'Last Name'
									),
									ce('input', {
										key: `LastNameInput`,
										className: `heading-input`,
										placeholder: 'Sizov',
										value: this.state.lastNameField,
										onChange: (event) => {
											this.validate(
												/^[A-ZА-Я][a-zа-я]+$/,
												event.target.value,
												'lastNameField',
												'Last Name'
											);
										},
									}),
								]
							),
							ce(
								'div',
								{
									key: `numberContainer`,
									className: `element-container`,
								},
								[
									ce(
										'div',
										{
											key: `headingPhoneNumberInput`,
											className: `heading-input`,
										},
										'Phone Number'
									),
									ce('input', {
										key: `PhoneNumberInput`,
										className: `heading-input`,
										placeholder: '+79781010101',
										value: this.state.phoneNumberField,
										onChange: (event) => {
											this.validate(
												/^\+\d+$/,
												event.target.value,
												'phoneNumberField',
												'Phone Number'
											);
										},
									}),
								]
							),
							ce(
								'div',
								{
									key: `emailContainer`,
									className: `element-container`,
								},
								[
									ce(
										'div',
										{
											key: `headingEmailInput`,
											className: `heading-input`,
										},
										'Email'
									),
									ce('input', {
										key: `EmailInput`,
										className: `heading-input`,
										placeholder: 'my.email@gmail.com',
										value: this.state.emailField,
										onChange: (event) => {
											this.validate(
												/^.+@.+\.[a-z]+$/,
												event.target.value,
												'emailField',
												'Email'
											);
										},
									}),
								]
							),
							ce(
								'div',
								{
									key: `passwordContainer`,
									className: `element-container`,
								},
								[
									ce(
										'div',
										{
											key: `headingPasswordInput`,
											className: `heading-input`,
										},
										'Password'
									),
									ce('input', {
										key: `PasswordInput`,
										className: `heading-input`,
										placeholder: 'Alex343>',
										value: this.state.passwordField,
										type: 'password',
										onChange: (event) => {
											this.validate(
												/[a-zA-Z0-9!@#$%^&*<>]{6,}/,
												event.target.value,
												'passwordField',
												'Password'
											);

											if (this.state.repeatPasswordField !== event.target.value)
												if (this.state.repeatPasswordField)
													if (this.errorField === null)
														this.errorField = 'Repeat Password';
										},
									}),
								]
							),
							ce(
								'div',
								{
									key: `repeatPasswordContainer`,
									className: `element-container`,
								},
								[
									ce(
										'div',
										{
											key: `headingRepeatPasswordInput`,
											className: `heading-input`,
										},
										'Repeat Password'
									),
									ce('input', {
										key: `RepeatPasswordInput`,
										className: `heading-input`,
										placeholder: 'Alex343>',
										value: this.state.repeatPasswordField,
										type: 'password',
										onChange: (event) => {
											this.errorField =
												event.target.value === this.state.passwordField
													? null
													: 'Repeat Password';
											this.setState({
												repeatPasswordField: event.target.value,
											});
										},
									}),
								]
							),
							ce(
								'div',
								{
									key: `RegisterButtonContainer`,
									className: `register-button-container`,
								},
								ce(
									'button',
									{
										key: `RegisterButton`,
										className: `register-button`,
										disabled: this.errorField || this.isValidForm(),
										onClick: () => {
											this.setState({ completedForm: true });
										},
									},
									'Register'
								)
							),
						],
						this.errorField &&
							ce(
								'div',
								{
									className: 'error-field',
								},
								`Invalid data in the '${this.errorField}' field`
							)
					),
					ce('div', {
						key: 'rightRegion',
						className: 'right-region',
					}),
				]
			);
		} else {
			return ce(
				'div',
				{
					key: `CompleteMessageContainer`,
					className: `complete-message-container`,
				},
				[
					ce('div', {
						key: `topRegionMessage`,
						className: `top-region-message`,
					}),
					ce(
						'div',
						{
							key: `CompleteMessage`,
							className: `complete-message`,
						},
						'Registration completed successfully!'
					),
					ce('div', {
						key: `bottomRegionMessage`,
						className: `bottom-region-message`,
					}),
				]
			);
		}
	}
}

ReactDOM.render(ce(App), document.querySelector('.application'));
