# takvim uygulaması
Adım adım takvim uygulamamızı nasıl ortaya çıkarttığımızı açıklayalım ; 

1.İlk olarak, React kütüphanesini ve `useState` adlı bir hook'u içe aktarırız. Bu bize React bileşenleri oluşturmak ve bileşen durumunu kullanmak için gerekli olan araçları sağlar.
2. Ardından, `CalendarApp` adında bir fonksiyonel bileşen tanımlarız. Bu bileşen, takvim uygulamasını temsil eder.
3. Bileşen içinde, `date` ve `setDate` adlı iki değişken tanımlarız. `date`, mevcut tarihi tutan bir durum değişkenidir ve `setDate`, tarih değişikliklerini güncellemek için kullanılan bir işlevdir. Başlangıçta, `date` değişkenine `new Date()` ile mevcut tarih atanır.
4. `handlePrevMonth` adlı bir işlev tanımlarız. Bu işlev, önceki ayı işlemek için kullanılır. İçinde, `prevDate` adlı bir parametre alır ve `prevDate`'in bir önceki ayının başlangıç tarihini hesaplar. Bu yeni tarih, `setDate` işlevi aracılığıyla `date` değişkenine atanır.
5. `handleNextMonth` adlı bir işlev tanımlarız. Bu işlev, sonraki ayı işlemek için kullanılır. İçinde, `prevDate` adlı bir parametre alır ve `prevDate`'in bir sonraki ayının başlangıç tarihini hesaplar. Bu yeni tarih, `setDate` işlevi aracılığıyla `date` değişkenine atanır.
6. `renderCalendar` adlı bir işlev tanımlarız. Bu işlev, takvimin günlerini oluşturmak için kullanılır. İçinde, mevcut yılın ve ayın bilgilerini alırız. Daha sonra, ayın ilk gününün haftanın hangi gününe denk geldiğini ve ayın kaç gün olduğunu hesaplarız. Bu bilgileri kullanarak, takvimdeki boş günleri ve ayın günlerini oluşturan JSX kodunu döndürürüz.
7. Son olarak, bileşenin JSX kodunu oluştururuz. Bu kod, takvim uygulamasının görüntüsünü temsil eder. İçinde, `handlePrevMonth` ve `handleNextMonth` işlevlerinin tetiklendiği önceki ve sonraki ay butonları, mevcut ayın başlığını gösteren bir başlık ve `renderCalendar` işlevinin döndürdüğü takvim günlerini içeren bir takvim alanı bulunur.
8. Bileşeni `export default` ifadesiyle dışa aktarırız, böylece başka dosyalarda kullanabiliriz.
