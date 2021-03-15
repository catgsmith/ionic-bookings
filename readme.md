## Bookings Project
This project was generated with Ionic Veriosn 5.4.16 using Angular


## Install

```
% ionic start ionic-bookings blank
$ rm -rf src/app/home
```
Remove `home` from `app-routing.module.ts`.
```
$ ionic generate page auth
$ ionic generate page places
$ ionic generate page places/discover
$ ionic generate page places/offers

$ ionic generate page places/offers/new-offer
$ ionic generate page places/offers/edit-offer
$ ionic generate page places/discover/place-detail
$ ionic generate page places/offers/offer-bookings
$ ionic generate page bookings

```

## Start

```
$ ionic serve
```

### Other commands (use as needed)
```  
$ ng g module places/places --routing --flat
```
```
$ ionic generate service places/places
```

### References
Tutorial from [Ionic 4 - Build iOS, Android and Web Apps with Ionic and Angular](https://learning.oreilly.com/api/v1/dashboard/continue/9781838828943/).


## License
CladdaghCode