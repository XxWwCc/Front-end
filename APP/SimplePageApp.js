        
        var idget = document.querySelector("#container");
        class Home extends React.Component{
            render(){
                return (
                    <div>
                        <h2>望天门山</h2>
                        <p>........</p>    
                    </div>
                );
            }
        }
        class Dufu extends React.Component{
            render(){
                return (
                    <div>
                        <h2>登高</h2>
                        <p>........</p>    
                    </div>
                );
            }
        }
        class Lsy extends React.Component{
            render(){
                return (
                    <div>
                        <h2>锦瑟</h2>
                        <p>........</p>    
                    </div>
                );
            }
        }
        
        ReactDOM.render(
            <HashRouter>
                <div>
                    <ul className="header">
                        <li><NavLink activeClassName="active" to="/">李白</NavLink></li>
                        <li><NavLink activeClassName="active" to="/df">杜甫</NavLink></li>
                        <li><NavLink activeClassName="active" to="/lsy">李商隐</NavLink></li>
                    </ul>
                    <div className="content">
                        <Route exact path="/" component={Home}/>
                        <Route path="/df" component={Dufu}/>
                        <Route path="/lsy" component={Lsy}/>
                    </div>
                </div>
            </HashRouter>
            ,idget
        )
        