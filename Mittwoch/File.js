function load(files) {
    console.log('load ');
    console.log(files[0]);
    console.log(files[0].name);

    const reader = new FileReader();
    reader.onload = function fileReadCompleted() {
        // when the reader is done, the content is in reader.result.
        console.log(reader.result);
    };
    reader.readAsText(files[0]);
}