import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import banner from "../../Assets/TubaiAssets/banner.png"
import box1 from "../../Assets/TubaiAssets/box1.png"
import box2 from "../../Assets/TubaiAssets/box2.png"
import box3 from "../../Assets/TubaiAssets/box3.png"
import icon1 from "../../Assets/TubaiAssets/icon1.png"
import icon2 from "../../Assets/TubaiAssets/icon2.png"
import icon3 from "../../Assets/TubaiAssets/icon3.png"
import exclamacao from "../../Assets/TubaiAssets/exclamation.png"
import core from "../../Assets/TubaiAssets/heart.png"
import book from "../../Assets/TubaiAssets/book.png"
import cloud from "../../Assets/TubaiAssets/cloud.png"
import medalha from "../../Assets/TubaiAssets/badge.png"
import { Link } from "react-router-dom";

const TubAI = (props) => {
  const scrollToRef = useRef(null);

  const handleScroll = () => {
    scrollToRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (

    <div className='TubAI'>

      <div className='bannertubai'>
        <img src={banner} />
        </div>
   
        <div className='txtbanner1'>
          <div className='txts'>
            <div className='txt1'>
              <h1>57 mil</h1>
              <p>Litros de combustível economizados</p>
            </div>

          <div className='txt1'>
            <h1>90TB</h1>
            <p>de dados analisados
              pela nossa inteligência.</p>
          </div></div>

          <div className='txt1'>
            <h1>67%</h1>
            <p>a mais de
              segurança marítimica.</p>
          </div>

          <button className='blue-button' onClick={handleScroll} style={{margin: '4%'}}>Explore</button>
        </div>
    
        <div ref={scrollToRef} className='txtbanner2'>
          <p>Nós somos a <b>Seafety</b>.</p>
          <p className='pblue'>o oceano.</p>
          <p className='pbluefade'>o mundo.</p>       
        </div>

      <div  className='pbox1'>
        <p>O melhor jeito de utilizar a inteligência artificial.
          Para a <b className='pblue'>sustentabilidade.</b></p>
      </div>
      
      <div className='links'> 
          <div className='box1'>
            <div className='insidebox'>
              <h3>Rotas <b className='pblue'>Otimizadas</b>.</h3>
              <img className='imgbox1' src={box1} />
              <button className='btnlinks'><p className='pbtn'>Rotas</p></button>
            </div>
          </div>
        
        <div className='box1'>
          <div className='insidebox'>
            <h3>Analise <b className='pblue'>Oceânicas</b>.</h3>
            <img className='imgbox1' src={box2} />    
            <button className='btnlinks'><p className='pbtn'>Dashboard</p></button>
          </div>
        </div>

        <div className='box1'>
          <div className='insidebox'>
            <h3>Oceano <b className='pblue'>Seguro</b>.</h3>
            <img className='imgbox1' src={box3} />
            <button className='btnlinks'><p>Seafety</p></button>
          </div>
        </div>
      </div>

      <div className='icons-container'>
      <div className='box2div1'>
        <h1>Como a <b className='pblue'>TubAI</b> pode</h1> 
        <h1>te ajudar hoje?</h1>
        <p>Palavras chaves da nossa tecnologia</p>
      </div>

      <div className='box2div2'>
        <div className='twoicon'>
          <div className='icon'>
            <img src={icon1} />
            <h4>Banco de Dados</h4>
            <p>Guardamos dados de diversas fontes.</p>
            </div>
            
          <div className='icon'>
            <img src={icon2}  />
            <h4>Formar Padrões</h4>
            <p>Identificamos padrões na natureza oceanica.</p>
          </div> 
           
        </div>
          <div className='icon'>
            <img src={icon3}  />
            <h4 >Análise Preventiva</h4>
            <p>Tendências para a melhor tomada de decisões.</p>
        </div>
      </div></div>

      <div className='titleinsight'><h1>Insights e Previsões de Sucesso</h1></div>
      <div className='insights'>
        <div className='prevision'>
          <div className='titulo1'>
            <img src={exclamacao} />            
            <div ><b>Previsão de Tempestade Costeira</b></div>
          </div>
          <p>A IA da Seafety analisou dados meteorológicos e marítimos, indicando a formação de uma tempestade severa. Com base em padrões históricos e condições.</p>
          <p><b>Risco:</b> Áreas Vulneráveis</p>
        </div>

        <div className='preservations'>
          <div className='turtle'>
            <div className='titulo1'>
            <img src={core} />
               
            <div><b>Preservação Ambiental: Tartatuguinhas!</b></div>
            </div>
            <p>A época de desova é regida principalmente pela temperatura, ocorrendo nos períodos mais quentes do ano. Pela análise da nossa IA, prevemos localizações e datas.</p>
          </div>
            <button className='btnbbox3'>Veja mais previsões</button>
        </div>
      </div>

      <div className="plans-container">
      <h1 className="plans-title">Planos</h1>
      <table className="plans-table">
        <thead>
          <tr>
            <th></th>
            <th>
              <img src={book}/>
              <div>Gratuito</div>
            </th>
            <th>
              <img src={cloud}/>
              <div>Standard</div>
            </th>
            <th>
              <img src={medalha}/>
              <div>Premium</div>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Temperatura (Real-time)</td>
            <td>&#10003;</td>
            <td>&#10003;</td>
            <td>&#10003;</td>
          </tr>
          <tr>
            <td>Salinidade</td>
            <td></td>
            <td>&#10003;</td>
            <td>&#10003;</td>
          </tr>
          <tr>
            <td>pH</td>
            <td></td>
            <td>&#10003;</td>
            <td>&#10003;</td>
          </tr>
          <tr>
            <td>Oxigenação</td>
            <td></td>
            <td>&#10003;</td>
            <td>&#10003;</td>
          </tr>
          <tr>
            <td>Microplástico</td>
            <td></td>
            <td></td>
            <td>&#10003;</td>
          </tr>
          <tr>
            <td>Nível do Mar</td>
            <td></td>
            <td></td>
            <td>&#10003;</td>
          </tr>
          <tr>
            <td>Análise dos dados por IA</td>
            <td></td>
            <td>&#10003;</td>
            <td>&#10003;</td>
          </tr>
          <tr>
            <td>Caminhos marítimos traçados por IA</td>
            <td></td>
            <td></td>
            <td>&#10003;</td>
          </tr>
          <tr>
            <td>Rastreador de navegações</td>
            <td></td>
            <td></td>
            <td>&#10003;</td>
          </tr>
          <tr>
            <td>Relatório de navegação</td>
            <td></td>
            <td></td>
            <td>&#10003;</td>
          </tr>
          <tr>
            <td style={{border:'none'}}></td>
            <td style={{border:'none'}}><button className="price-button">Gratuito</button></td>
            <td style={{border:'none'}}><button className="price-button">$64/mês</button></td>
            <td style={{border:'none'}}><button className="price-button">$100/mês</button></td>
          </tr>
        </tbody>
      </table>
    </div>
     </div>
  )
}

TubAI.propTypes = {}

export default TubAI