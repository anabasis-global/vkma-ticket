import React from 'react'
import cx from 'classnames'
import { Input, useAdaptivityWithJSMediaQueries } from '@vkontakte/vkui'
import { PriceDisplay } from 'src/components'

import './Subtotal.css'

export type SubtotalProps = {
  totalPrice: number
}

let Subtotal: React.FC<SubtotalProps> = ({ totalPrice }) => {
  const { isDesktop } = useAdaptivityWithJSMediaQueries()
  return (
    <div
      className={cx('Subtotal', {
        Subtotal__desktop: isDesktop,
      })}
    >
      <div className="Subtotal_price">
        <div className="Sutotal_price_title">Итого</div>
        <PriceDisplay price={totalPrice} className="Sutotal_price_counter" />
      </div>
      <Input type="text" placeholder="Промокод" />
    </div>
  )
}

Subtotal = React.memo(Subtotal)
export { Subtotal }
