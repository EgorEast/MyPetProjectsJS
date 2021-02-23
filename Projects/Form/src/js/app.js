const reactComponent = React.Component;
const ce = React.createElement;

class ValidityForm {
  static isFName;
  static isLName;
  static isNumber;
  static isEmail;
  constructor(){
    this.isFName = false;
    this.isLName = false;
    this.isNumber = false;
    this.isEmail = false;
  }
  static isForm () {
    if (this.isFName) {
      return true;
    }
    else return false;
  }
}

class App extends reactComponent {
	render() {
		return ce(
			'div',
			{
				className: 'form',
			},
			ce(
				'h1',
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
							onInput: (event) => {
								if (event.target.value.match()) {
								}
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
								key: `headingNumberInput`,
								className: `heading-input`,
							},
							'Number'
						),
						ce('input', {
							key: `NumberInput`,
							className: `heading-input`,
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
						}),
					]
				),
			]
		);
	}
}

ReactDOM.render(ce(App), document.querySelector('.application'));
