import { FC, useCallback, useEffect } from 'react'
import { useRouteNavigator } from '@vkontakte/vk-mini-apps-router'
import { CategoryCard, Navbar, PageHeader } from 'src/components'
import { NavIdProps, Panel } from '@vkontakte/vkui'
import { ViewingPanel } from 'src/routes'
import { useAppDispatch, useAppSelector } from 'src/store'
import { appInitialState, setProductFilters } from 'src/store/app.reducer'
import { storeInitialState, setStore } from 'src/store/store.reducer'

import './CategoryList.css'

export const CategoryList: FC<NavIdProps> = (props) => {
  const dispatch = useAppDispatch()
  const routeNavigator = useRouteNavigator()
  const { categories, filters } = useAppSelector((state) => state.app)

  const onCategoryCardClick = useCallback(
    (id: number) => {
      dispatch(setProductFilters({ ...filters, categoryId: id.toString() }))
      routeNavigator.push(`/${ViewingPanel.Store}`)
    },
    [dispatch, routeNavigator, filters]
  )

  /** Возвращаем начальное состояние фильтров и сохраненных товаров */
  useEffect(() => {
    setTimeout(() => {
      dispatch(setProductFilters(appInitialState.filters))
      dispatch(setStore(storeInitialState))
    }, 300)
  }, [dispatch])

  return (
    <Panel className="Panel__fullScreen" {...props}>
      <Navbar searchDisable>
        <PageHeader header="Категории" />
      </Navbar>

      <div className="CategoryList">
        <div className="CategoryList_grid">
          {categories.map((item) => {
            return (
              <CategoryCard
                productCount={item.productCount}
                name={item.name}
                key={item.id}
                onClick={() => onCategoryCardClick(item.id)}
              />
            )
          })}
        </div>
      </div>
    </Panel>
  )
}
