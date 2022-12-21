import Head from 'next/head';
import styled from 'styled-components';


export default function Creation() {

  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <Title>Veuillez remplir ce formulaire <br />afin de vous inscrire</Title>
      </div>
      <div className="jumbotron jumbotron-fluid">
        <div className="containerPerso">
          <form>
            <fieldset>
              <div className="col-md-6">
              <div class="form-group">
                  <label for="exampleSelect1" class="form-label mt-4">Civilité</label>
                  <select class="form-select" id="exampleSelect1">
                    <option>1</option>
                    <option>2</option>
                  </select>
                </div>
                <div class="form-group">
                  <label for="exampleInputEmail1" class="form-label mt-4">Email address</label>
                  <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                  <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div class="form-group">
                  <label for="exampleInputEmail1" class="form-label mt-4">Email address</label>
                  <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                  <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div class="form-group">
                  <label for="exampleInputEmail1" class="form-label mt-4">Email address</label>
                  <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                  <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div class="form-group">
                  <label for="exampleInputEmail1" class="form-label mt-4">Email address</label>
                  <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                  <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div class="form-group">
                  <label for="exampleInputPassword1" class="form-label mt-4">Password</label>
                  <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
                </div>                
              </div>
              <div className="col-md-6">
                <div class="form-group">
                  <label for="exampleTextarea" class="form-label mt-4">Example textarea</label>
                  <textarea class="form-control" id="exampleTextarea" rows="3"></textarea>
                </div>
                <div class="form-group">
                  <label for="formFile" class="form-label mt-4">Default file input example</label>
                  <input class="form-control" type="file" id="formFile" />
                </div>
                <fieldset class="form-group">
                  <legend class="mt-4">Radio buttons</legend>
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="optionsRadios" id="optionsRadios1" value="option1" checked="" />
                    <label class="form-check-label" for="optionsRadios1">
                      Option one is this and that—be sure to include why it's great
                    </label>
                  </div>
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="optionsRadios" id="optionsRadios2" value="option2" />
                    <label class="form-check-label" for="optionsRadios2">
                      Option two can be something else and selecting it will deselect option one
                    </label>
                  </div>
                  <div class="form-check disabled">
                    <input class="form-check-input" type="radio" name="optionsRadios" id="optionsRadios3" value="option3" disabled="" />
                    <label class="form-check-label" for="optionsRadios3">
                      Option three is disabled
                    </label>
                  </div>
                </fieldset>
                <fieldset class="form-group">
                  <legend class="mt-4">Checkboxes</legend>
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                    <label class="form-check-label" for="flexCheckDefault">
                      Default checkbox
                    </label>
                  </div>
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked="" />
                    <label class="form-check-label" for="flexCheckChecked">
                      Checked checkbox
                    </label>
                  </div>
                </fieldset>
                <fieldset class="form-group">
                  <legend class="mt-4">Switches</legend>
                  <div class="form-check form-switch">
                    <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                    <label class="form-check-label" for="flexSwitchCheckDefault">Default switch checkbox input</label>
                  </div>
                  <div class="form-check form-switch">
                    <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked="" />
                    <label class="form-check-label" for="flexSwitchCheckChecked">Checked switch checkbox input</label>
                  </div>
                </fieldset>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    </div>

  )
}

const Title = styled.h1`
      margin-top: 2vw;
      font-family: 'Biryani', sans-serif;
      font-size: 30px;
      color: rgb(30, 30, 30)!important;
      color: white;
      text-align: center;
      `
