import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';


export default class Porfolio extends Component {
  
  render() {
 
    let resumeData = this.props.resumeData;
    return (
      <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1 style={{fontSize:'3rem'}}>Project.</h1>
          <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
          {/* <Paper>
            <Grid container spacing={2}>
              <Grid item>
                  <img src={`${item.imgurl}`} className="item-img"/>
              </Grid>
            </Grid>
          </Paper> */}
          {
            resumeData.portfolio && resumeData.portfolio.map((item)=>{
              return(
                <Paper>
                  <Grid container spacing={3}>
                    <Grid item> 
                      
                      {item.boolean ? <img src={`${item.imgurl}`} className="item-img"/> :<img style={{marginTop:'2.5rem'}} src={`${item.imgurl}`} className="item-img"/> }
                      
                    </Grid>
           
                      <Grid className="PortfolioContent" item xs={12} sm container style={{    padding:'65px' }}>
                        <Grid item xs>
                          <Typography variant="h2" component="h2" gutterBottom style={{fontWeight:'bold'}}>
                              {item.name}
                           </Typography>
                           <Typography variant="h4" component="h4" gutterBottom style={{margin:'4rem 0 2rem 0'}}>
                             개발기간 :  {item.develop_period}
                          </Typography>
                          <Typography variant="h4" component="h4" gutterBottom>
                               {item.description}
                          </Typography>
                          <Typography variant="h5" component="h5" gutterBottom >
                               <a style={{color:'#868e96' , cursor:'pointer'}}> {item.link} </a> 
                          </Typography>
                          <div style={{marginTop:'1rem'}}> 
                            <a style={{fontSize:'2.4rem',color:'#333',cursor:'pointer'}} href={item.url} target="_blank"> <i className={item.className}></i> </a> 
                          </div>
                        </Grid>
                      </Grid>
                  
                  </Grid>
                </Paper>
              )
            })
          } 
          </div>
        </div>
      </div>
      </section>
        );
  }
}