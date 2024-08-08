import React from 'react'
import * as S from './Style'
import LeftImg from '../../../../assets/svg/Blob.svg'

const WhatProduct = () => {
    return (
        <S.FullContainer>
            <S.LeftContainer>
                <img src={LeftImg} alt="" />

                <p>“Lorem ipsum dolor sit
                    amet, consectetur
                    adipiscing elit, sed do
                    eiusmod tempor
                    incididunt ut labore
                    et dolore magna aliqua.”</p>

            </S.LeftContainer>

            <S.RightContainer>
              
              <h1>Our Product Design & Development</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem corrupti voluptas aliquid nulla, fugit dolorum libero. Cumque laboriosam dignissimos quae at beatae? Reiciendis, est corporis modi labore mollitia doloribus quaerat.</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem corrupti voluptas aliquid nulla, fugit dolorum libero. Cumque laboriosam dignissimos quae at beatae? Reiciendis, est corporis modi labore mollitia doloribus quaerat.</p>

              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem corrupti voluptas aliquid nulla, fugit dolorum libero. Cumque laboriosam dignissimos quae at beatae? Reiciendis, est corporis modi labore mollitia doloribus quaerat.</p>

              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem corrupti voluptas aliquid nulla, fugit dolorum libero. Cumque laboriosam dignissimos quae at beatae? Reiciendis, est corporis modi labore mollitia doloribus quaerat.</p>

            </S.RightContainer>

        </S.FullContainer>
    )
}

export default WhatProduct
