Feature: The Cermati Website

  Scenario Outline: As a new user, I can register sucessfully
    Given I am on the register page
    When I register with <email> and <no_handphone> and <katasandi> and <ulangikatasandi> and <nama_depan> and <nama_belakang> and <kabupaten_kota>
    And I click daftar button
    And I should see a message saying <message>
    And I click kirim sms button
    Then I see message text about <message_text>

    Examples: 
      | email | no_handphone | katasandi  | ulangikatasandi | nama_depan | nama_belakang | kabupaten_kota     | message                 | message_text      |
      | test  | 082314411546 | fguu231!@V | fguu231!@V      | resa       | wibowo        | KOTA JAKARTA BARAT | Pilih Metode Verifikasi | Kode OTP Terkirim |
