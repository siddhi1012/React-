import React from 'react'
import { Bookmark } from 'lucide-react'
const App = () => {
  return (
    <div className="parent">
      <div className="card">
        <div className="top">
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJQAAACUCAMAAABC4vDmAAAAnFBMVEX///8EBwcAAAD4mB3S09P4kQD4kwD4jwD8/Pzz8/P4lQ/4lxgAAwPe3t7Z2dn4+PiKiorl5eWioqL+79+am5uqq6u6urrt7e04OTl7e3tVVlbMzMwgISGAgYEnKCj+8uX7wYX95c37y5zDw8Ntbm5CQ0NeXl4YGRkQERH94MP81rD6tGz+9+/80qj5pUj6uHb5ozf6sGH5q1b7xZAEvE3kAAAGFklEQVR4nO2ai3KCOhCGa5AEo1UQ8H4BvFVUpPr+73YCqFWz3pDEc87kn+lMp8XwubvZbDb5+lJSUlJSUlJSUlJS+r+pUp+4jmMmctzJ96dxGE9rWkNXGpkT63NIfbOXUtRqpZNqKeOo2/oIUdvtJDwlUAmYKd9c7uwm0ZFr5MpF6jMr3SM6YHVkRr3zBFKKNZjIQqr0nmRKjCXJhe35s0gplZRp2Oi8wJRQSZiERvclJkbVqwiHcl5kYlRN0Uz1p2P8DwoJZmrcCPJs/fuQqfpgFmc8i8Fo8HMjx6N5QygUNPNY4m5O6lbb6rtwAkM/QhN7mTdFDXVap+nVmIxAqr5IqCH3yhrqXsx4lu0BqKFApvbs+o01ZBqXz1QWPBXqCIT65ryHelwMu7yLhSaFJm+oMvdQhTOnWKjp9evQ3HjiKcYucKXhMidYmPALUU3kojw57lcOUYMWvPeSBMtD1cVBfVmO2Z32OoMj3Bx6qA5AQfCFqmKV+5OWM+yhOeiV709APZKC+k9DWf8uqIb1Xe73oTz1EShWS5lDlixGJagAlQ3V+J40p52zPhBUe0qFqrS6vdEtko9AWW7v3m7hE1DWsPPQQJKhrO5zJpIJ1Ry9tiWVsSBPX90li4eywF3UZ6HKg5u786OkQ7VLMFPap57NevNpF6rRhUIBW5WMaNB1jx39imwo3gop07xV+dvWyC5dWkC+rKHeZQtYMhS/bU/MdL1xlwzlQhOL64hJhvoBDGVyT8ndYgERhTr8hlwuFN+dKkGt+7JMKIvvPKEfoJsJbduFQfEWgFt0/HQQCAW09cFmtCkTiu9m1sDTIL7VLhCKb1ejH6Dta/AZtiauPczXLGB/qg9lM0cQkwFNPsAC0IkSkGKLEdiLBtqLUGEq7HjtSagWXNyIOgiBoKbX3eE2fG6KuoKgAL8grhfNJ6nswUVbDBR4gnUVwfDRm0BTgUdBi4v5B6WDo03FdK3B02M0+EtVhntnl4oGQhzI10npy0bNLK4a5ft3KPhJUYSA0iVzzKjruk3zYRdGyGUOA9xflU5b47tEJVEOBE7yXhESsyzfbCNwrwfP5IF6vgABWyyYaV7iqVBHTFIAT60BJocv9Grirrz0n7pfxmpk68rTSOSBu/Mw1lEpLZFbF/hIWJWXyBg+sBUqHSLn/EaT8Jtd5j0qhKbHyDm7qoNGQm9wJGrdu9zp/i0llWNVIeWuWRvuDiM0GF6k7MNcRXNBpdSljMnlAcjh8rB5XfJWZsmfJdx+O6jRnM5+Tu3gxWxuQmFjmJ2ZyGnHq13vt5qO03T75Xr71q0ti3OdvQyDYBMux7le6m0Kr3/sYEcI0RMRou1zjE/Ial0o0nir6VQ7qUqWr48RUqyHxSGt94RgPROuJlT6JscwAaniVT7XA1oSLVp5LJrCMPDixGIk11fe6xrGm6J8eBFBHqPK4z6mPdGqepTvs/fl6wzKzvdZj32Wkl+/SJ71CSrvCMxWmoa14uahv4oTy4dYo1HuQfY6mylVrG9z2voaiVCqsegKsPbO1A71dP4ya9lvJlPD/2XDaHjFfl1RrfpOUCy1NONVKdmFb3jRCHckGQjHLMuMqUZ/32BiI0Q4y8EUx56di8uwvRin3w1HyQChnjchnLTeZi5k5tLJLng5uuzgl2QjVImXfqmI0vg9pq+TCzNzafH+eXut7SDW8OHTlGYry5jNvQLSjL8jZ0upTuLtxn8c9/7Gi/SjldliFx9ctmGz+X0mpkA7W+FZ2LNvH3nL8XgNsBnr8Tj0dsyq+ETEzOQd/r3e6e87L5O9I1VNuwQjOI5+t0EQLn3fZvJ9n5Vw3moXs3/R88erJD45zCdaIVkv1TLCl1jJy6qU2QOzH0rT3xJRev2cHp+VjEFUWO3BtGbBwGE9FovB/QVGwSXtOoh5az1Awtq+2BKW1zisEs47t4kowa8ntjxiK/15sX1bVNdWIqoxWHYYkQf2YjYiUSjFSH8ywm1EdQxajG05aLQNRbSoH2pthyuWkIiOs4SQpgS2o8PxNsy3cBeH5m+CvedtV6vV1tsHm5x7XyUlJSUlJSUlJSUlpf++/gFxEGobUX88uAAAAABJRU5ErkJggg==" alt="" />
          <button>Save <Bookmark /> </button>

        </div>
        <div className="center">
          <h3>Amazon <span>5 days ago</span></h3>
          <h2>Senior UI/UX Designer</h2>
          <div>
            <h4>Part Time</h4>
            <h4>Senior Level</h4>
          </div>
        </div>
        <div className="bottom">
          <div>
            <h3>$120/hr</h3>
            <p>Mumbai,India</p>
          </div>
          <button>Apply Now</button>
        </div>
      </div>
    </div>
  )
}

export default App
