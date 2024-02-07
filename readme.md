# hello welcome to Cypress test

### Step Build 

``` bash
    # install dependencies
  $ npm install 

    # open cypress
  $ npx cypress open 

```  
เมื่อเปิด cypress มาแล้วให้เลืก Browser มาซัก 1ตัว
 และเลือกโฟร์เดอร์ ที่ 
  * e2e
    * Auth
      * login 
แล้ว cypress จะทำการ test automate เอง

เมื่อ  test เสร็จแล้วนั้น ในโค้ด จะมา การแคปภาพไว้ด้วย ว่าผลที่ได้จะเป็นยังไง 
โดยรูปภาพนั้นจะ อยู่ ใน โฟล์เดอร์ที่ ชื่อว่า screenshots 

การเซ็ต url ไว้ในไฟล์ config  
``` bash
  {
    baseurl:"http:WareRing.com"
    # เพื่อกำหนด คุณสมบัติให้สามารถเข้าถึงได้ 
    invalidProperty:true 
  }
```
ส่วนการดึงข้อมูล path เราจะใช้ 
  ``` bash
  cy.visit('ตามด้วย /path ที่จะเข้าถึง') 
 ```

