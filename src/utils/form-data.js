const { FormData } = window

export default {
  create (data) {
    let formData = new FormData()

    for (var attribute in data) {
      formData.append(attribute, data[attribute])
    }

    return formData
  }
}
