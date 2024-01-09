export default {
	mapEntityStatus(datasource, rowValue) {
		const { entityStatus } = datasource.data.result;
		const item = entityStatus.find((i) => Number(i.code) === rowValue);
		return item.name;
	},
	mapProfileStatus(datasource, rowValue) {
		const { profileStatus } = datasource.data.result;
		const item = profileStatus.find((i) => Number(i.code) === rowValue);
		return item.name;
	},
	getPrimaryContact(rowValue) {
		const primaryContact = rowValue[0];
		const primaryChannel = primaryContact?.channels[0];
		return primaryChannel?.contact ?? "";
	}
}