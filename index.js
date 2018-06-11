
function createTaskObject() {

    // Pre-defining the properties of our taskObject
    var taskObject = {
        postID: 0, // randomly generate postID
        category: '', // pickerView; lead into sub-categories?
        title: '',
        description: '',
        address: '', // google maps api
        price: 0,
        images: [''], // images is an array of image urls
        timePosted: '',
        isDone: false,
        // id; user associated needs to be thought about.
    }

    // TODO: populate the taskObject with values drawn from the createTaskForm

    // PUSH the taskObject into the tasks database.
}