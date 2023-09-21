import React from 'react'

const Create = () => {
    return (
        <div>
            <form>
                <div class="form-group">
                    <label for="exampleInputEmail1">Name</label>
                    <input type="email" class="form-control" />
                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Email</label>
                    <input type="password" class="form-control" />
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Age</label>
                    <input type="password" class="form-control" />
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked />
                    <label class="form-check-label" for="exampleRadios1">
                        Male
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" />
                    <label class="form-check-label" for="exampleRadios2">
                       Female
                    </label>
                </div>


                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Create