# Component vs PureComponent

```
- Giống nhau
- Nên sử dụng PureComponent
- Ở trạng thái componentShouldUpdate(), Component thông thường ko kiểm tra (shallow) điều kiện để cho phép component có được update hay ko. Trong khi PureComponent kiểm tra được việc này
``` 