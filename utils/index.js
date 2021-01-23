export const isExternalURL = (url) => /(https?:\/\/)?[\w\-~]+(\.[\w\-~]+)+(\/[\w\-~@:%]*)*(#[\w-]*)?(\?[^\s]*)?/gi.test(url)

export const cloudinaryAutoFormat = (imageURL) => {
	let urlWithFormat = imageURL
	if (imageURL.includes('cloudinary.com') && imageURL.includes('/image/upload/')) {
		urlWithFormat = imageURL.split('upload').join('upload/f_auto')
	}
	return urlWithFormat
}
