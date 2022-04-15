import React from 'react';
import './Aboutme.css';
import './Footer.css';

function Aboutme() {
  return (
    <div className='aboutme-container'>

        <h1>
            About Me
        </h1>
        <div className='aboutme-info'>
            <div className='aboutme-info-wrapper'>
                <div className='aboutme-info-items'>
                    <h2><i className="far fa-user" />&nbsp;
                        Name
                    </h2>
                    <h3>정병인</h3>
                </div>
                <div className='aboutme-info-items'>
                    <h2><i className="far fa-building" />&nbsp;
                        Company
                    </h2>
                    <h3>SnetSystems.</h3>
                </div>
            </div>
            <div className='aboutme-info-wrapper'>
                <div className='aboutme-info-items'>
                    <h2><i className="far fa-calendar" />&nbsp;
                        Birthday
                    </h2>
                    <h3>1986. 02. 14</h3>
                </div>
                <div className='aboutme-info-items'>
                    <h2><i className="far fa-envelope" />&nbsp;
                        E-Mail
                    </h2>
                    <h3>jbi0214@gmail.com</h3>
                </div>
            </div>
        </div>
        <section className='aboutme-subscription'>
            <p className='aboutme-subscription-text'>
                <i class="fas fa-check"></i>
                &nbsp;
                어플리테이션부터 Backend / Frontend 개발까지 다양한 경험을 보유하고 있습니다.
            </p>
            <p className='aboutme-subscription-text'>
                <i class="fas fa-check"></i>
                &nbsp;
                오픈 소스 및 신기술에 관심이 많고 적극적으로 활용하려고 합니다.
            </p>
            <p className='aboutme-subscription-text'>
                <i class="fas fa-check"></i>
                &nbsp;
                현업 및 팀원들과의 협업 및 커뮤니케이션의 중요성을 알고 있습니다.
            </p>
            <p className='aboutme-subscription-text'>
                <i class="fas fa-check"></i>
                &nbsp;
                이슈 발생 시 단순 조치가 아닌 근본적인 원인을 명확히 분석하고 조치 함으로써 이슈를 해결하고 예방하려고 합니다.
            </p>
        </section>

    </div>
  )
}

export default Aboutme