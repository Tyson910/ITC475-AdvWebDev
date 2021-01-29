/*
function FormNav({pageNum}){
            //only displays the section of form being filled out
            let pg1display = {display:'none'};
            let pg2display = {display:'none'};
            let pg3display = {display:'none'};
            let pg4display = {display:'none'};
    
            switch(this.state.page){
                case 1:
                    pg1display={display:'block'}
                    break;
                case 2:
                    pg2display = {display:'block'}
                    break;
                case 3:
                    pg3display = {display:'block'}
                    break;
                case 4:
                    pg4display = {display:'block'}
                    break;
            }
    
            //defines contents of each 'page' of form
            let page1 = <div className='formPage page1' style={pg1display}>
                <h3>Please Choose a Destination</h3>
                {cityButtonDisplay}
                <div className='errorMsg'>{this.state.errorMessage}</div>
                <input type='button' value='Next' id='nextButton'
                    onClick={this.handleNext} className='formnav-buttons'/>
            </div>
            
            let page2 = <div className='formPage page2' style={pg2display}>
                <h3>Please select at least one activity</h3>
                {arrayForm}
                <div className='errorMsg'>{this.state.errorMessage}</div>
                <input type='button' value='Go Back' id='backButton'
                onClick={this.handlePrev} className='formnav-buttons'/>
    
                <input type='button' value='Select None' id='noneButton'
                onClick={this.handleNone} className='formnav-buttons'/>
    
                <input type='button' value='Select All' id='allButton'
                onClick={this.handleAll} className='formnav-buttons'/>
    
                <input type='button' value='Next' id='nextButton'
                onClick={this.handleNext} className='formnav-buttons'/>
            </div>
    
            let page3 = <div className='formPage page3' style={pg3display}>
                <h3>Trip Information</h3>
                {tripForm}
                <div className='errorMsg'>{this.state.errorMessage}</div>
                <input type='button' value='Go Back' id='backButton'
                onClick={this.handlePrev} className='formnav-buttons'/>
    
                <input type='button' value='Next' id='nextButton'
                onClick={this.handleNext} className='formnav-buttons'/>
            </div>
    
            let page4 = <div className='formPage page4' style={pg4display}>
                <h3>Please Enter Your Contact Information</h3>
                    {contactForm}
                <div className='errorMsg'>{this.state.errorMessage}</div>
    
                <input type='button' value='Go Back' id='backButton'
                onClick={this.handlePrev} className='formnav-buttons'/>
    
                <input id='submitBtn' type='submit' />
            </div>

            return(
                page1,
                page2,
                page3,
                page4;
            )
}
*/