export const loadComponentWithDelay = (importFunc: () => Promise<{ default: React.ComponentType }>, delay = 2000) => {
      return new Promise<{ default: React.ComponentType }>((resolve) => {
            setTimeout(() => {
                  resolve(importFunc())
            }, delay)
      })
}
