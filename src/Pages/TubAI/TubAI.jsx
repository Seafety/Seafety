import React from 'react'
import PropTypes from 'prop-types'
import banner from "../../Assets/TubaiAssets/banner.png"



const TubAI = props => {
  return (

    <>
      {/* BANNER */}

      <div className='bannertubai'>
        img = {banner};
        <div className='txtbanner1'>

          <div className='txt1'>
            <h1>57 mil</h1>
            <p>Litros de combustível economizados</p>
          </div>

          <div className='txt2'>
            <h1>90TB</h1>
            <p>de dados analisados
              pela nossa inteligência.</p>
          </div>

          <div className='txt3'>
            <h1>67%</h1>
            <p>a mais de
              segurança marítimica.</p>
          </div>


        </div>

        <div className='txtbanner2'>
          <p>Nós somos a Seafety.</p>
          <p>o oceano.</p>
          <p>o mundo.</p>

        </div>
      </div>
      
      {/* BOX1 */}


      <div className='pbox1'>
        <p>O melhor jeito de utilizar a inteligência artificial.
          Para a sustentabilidade.</p>
      </div>
      
      <div className='links'>
        <div className='box1'>
          <h3>Rotas Otimizadas.</h3>
          <img className='imgbox1' src="" alt="" />
          <button className='btnlinks'>Rotas</button>
        </div>
        
        <div className='box2'>
          <h3>Analise Oceânicas.</h3>
          <img className='imgbox1' src="" alt="" />
          <button className='btnlinks'>Dashboard</button>
        </div>

        <div className='box3'>
          <h3>Oceano Seguro.</h3>
          <img className='imgbox1' src="" alt="" />
          <button className='btnlinks'>Seafety</button>
        </div>
      </div>

      
      {/* BOX2 */}
      <div className='box2div1'>
        <h1>Como a TubAI pode te ajudar hoje?</h1>
        <p>Palavras chaves da nossa tecnologia</p>
      </div>

      <div className='box2div2'>
        <div>
          <div>
            <img src="" alt="" />
            <h3>Banco de Dados</h3>
            <p>Guardamos dados de diversas fontes.</p>
            </div>
            
          <div>
            <img src="" alt="" />
            <h3>Formar Padrões</h3>
            <p>Identificamos padrões na natureza oceanica.</p>
          </div> 
            
        </div>

        <div>
            <img src="" alt="" />
            <h3>Análise Preventiva</h3>
            <p>Tendências para a melhor tomada de decisões.</p>
        </div>
      </div>

      {/* BOX3 */}
      <h1>Insights e Previsões de Sucesso</h1>
      <div>
        <div>
          <div>
            <div><img src="" alt="" /></div>
               
            <div><p>Previsão de Tempestade Costeira</p></div>
          </div>
          <p>A IA da Seafety analisou dados meteorológicos e marítimos, indicando a formação de uma tempestade severa. Com base em padrões históricos e condições.</p>
          <p><b>Risco:</b> Áreas Vulneráveis</p>
        </div>

        <div>
          <div>
            <div>
            <div><img src="" alt="" /></div>
               
            <div><p>Preservação Ambiental: Tartatuguinhas!</p></div>
            </div>
            <p>A época de desova é regida principalmente pela temperatura, ocorrendo nos períodos mais quentes do ano. Pela análise da nossa IA, prevemos localizações e datas.</p>
          </div>

          <div>
            <button className='btnbbox3'>Veja mais previsões</button>
          </div>
        </div>
      </div>

      {/* PLANOS */}

      <div className="plans-container">
      <table className="plans-table">
        <thead>
          <tr>
            <th>Planos</th>
            <th>Gratuito</th>
            <th>Standard</th>
            <th>Premium</th>
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
        </tbody>
      </table>
      <div className="pricing">
        <div className="price-option">
          <span>Gratuito</span>
          <button>Gratuito</button>
        </div>
        <div className="price-option">
          <span>$64/mês</span>
          <button>$64/mês</button>
        </div>
        <div className="price-option">
          <span>$100/mês</span>
          <button>$100/mês</button>
        </div>
      </div>
    </div>
      </>
  )
}

TubAI.propTypes = {}

export default TubAI