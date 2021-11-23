const vm = Vue.createApp({
	data() {
		return {
			firstName: "Ryan",
			lastName: "McDonagh",
		};
	},
	methods: {
		fullName() {
			return `${this.firstName} ${this.lastName.toUpperCase()}`;
		},
	},
}).mount("#app");

// setTimeout(() => {
// 	vm.firstName = "Norah";
// }, 2000);
