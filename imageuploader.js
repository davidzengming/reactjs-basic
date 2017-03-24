class ImageUploader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {file : '', imgPreviewURL : ''};

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleImageChange = this.handleImageChange.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log('handle uploading-', this.state.file);
    }

    handleImageChange(e) {
        e.preventDefault();
        let reader = new FileReader();
        let file = e.target.files[0];
        reader.onloadend = () => {
            this.setState ({
                file : file,    
                imagePreviewURL : reader.result
            });
        }
        reader.readAsDataURL(file);
    }

    render() {
        let { imagePreviewURL } = this.state;
        let $imagePreview = null;
        if (imagePreviewURL) {
          $imagePreview = (<img src={imagePreviewURL} />);
        } else {
          $imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
        }
        return (
            <div class="preview component">
                <form onSubmit={this.handleSubmit}>
                    <input 
                        classname="fileInput" 
                        type="file"
                        onChange={this.handleImageChange}
                    />
                    <button
                        classname="submitButton"
                        type="submit"
                        onClick={this.handleSubmit}>
                        Upload Image
                    </button>
                </form>
                <div className="imgPreview">
                    {$imagePreview}
                </div>
            </div>
        );
    }
}

ReactDOM.render(<ImageUploader/>, document.getElementById("mainApp"));
