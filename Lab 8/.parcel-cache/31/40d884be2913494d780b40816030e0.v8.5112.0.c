�o"
assetGrapho"$$type"2.0.0-beta.2:AssetGraph"$$rawT"valueo"nodes;"@@rooto"id"@@root"type"root"value0{" 3fa9a84234af755af7aa47598da5c64bo"id" 3fa9a84234af755af7aa47598da5c64b"type"asset_group"valueo"codec��v a r   H M R _ H O S T   =   n u l l ; v a r   H M R _ P O R T   =   1 2 3 4 ; v a r   H M R _ S E C U R E   =   f a l s e ; v a r   H M R _ E N V _ H A S H   =   " d 7 5 1 7 1 3 9 8 8 9 8 7 e 9 3 3 1 9 8 0 3 6 3 e 2 4 1 8 9 c e " ; m o d u l e . b u n d l e . H M R _ B U N D L E _ I D   =   " c a 6 2 5 3 8 3 0 b f 6 1 2 b 8 4 e f 4 1 7 e 8 6 3 f 1 0 1 5 2 " ; / /   @ f l o w 
 / *   g l o b a l   H M R _ H O S T ,   H M R _ P O R T ,   H M R _ E N V _ H A S H ,   H M R _ S E C U R E   * / 
 
 / * : : 
 i m p o r t   t y p e   { 
     H M R A s s e t , 
     H M R M e s s a g e , 
 }   f r o m   ' @ p a r c e l / r e p o r t e r - d e v - s e r v e r / s r c / H M R S e r v e r . j s ' ; 
 i n t e r f a c e   P a r c e l R e q u i r e   { 
     ( s t r i n g ) :   m i x e d ; 
     c a c h e :   { | [ s t r i n g ] :   P a r c e l M o d u l e | } ; 
     h o t D a t a :   m i x e d ; 
     M o d u l e :   a n y ; 
     p a r e n t :   ? P a r c e l R e q u i r e ; 
     i s P a r c e l R e q u i r e :   t r u e ; 
     m o d u l e s :   { | [ s t r i n g ] :   [ F u n c t i o n ,   { | [ s t r i n g ] :   s t r i n g | } ] | } ; 
     H M R _ B U N D L E _ I D :   s t r i n g ; 
     r o o t :   P a r c e l R e q u i r e ; 
 } 
 i n t e r f a c e   P a r c e l M o d u l e   { 
     h o t :   { | 
         d a t a :   m i x e d , 
         a c c e p t ( c b :   ( F u n c t i o n )   = >   v o i d ) :   v o i d , 
         d i s p o s e ( c b :   ( m i x e d )   = >   v o i d ) :   v o i d , 
         / /   a c c e p t ( d e p s :   A r r a y < s t r i n g >   |   s t r i n g ,   c b :   ( F u n c t i o n )   = >   v o i d ) :   v o i d , 
         / /   d e c l i n e ( ) :   v o i d , 
         _ a c c e p t C a l l b a c k s :   A r r a y < ( F u n c t i o n )   = >   v o i d > , 
         _ d i s p o s e C a l l b a c k s :   A r r a y < ( m i x e d )   = >   v o i d > , 
     | } ; 
 } 
 d e c l a r e   v a r   m o d u l e :   { b u n d l e :   P a r c e l R e q u i r e ,   . . . } ; 
 d e c l a r e   v a r   H M R _ H O S T :   s t r i n g ; 
 d e c l a r e   v a r   H M R _ P O R T :   s t r i n g ; 
 d e c l a r e   v a r   H M R _ E N V _ H A S H :   s t r i n g ; 
 d e c l a r e   v a r   H M R _ S E C U R E :   b o o l e a n ; 
 * / 
 
 v a r   O V E R L A Y _ I D   =   ' _ _ p a r c e l _ _ e r r o r _ _ o v e r l a y _ _ ' ; 
 
 v a r   O l d M o d u l e   =   m o d u l e . b u n d l e . M o d u l e ; 
 
 f u n c t i o n   M o d u l e ( m o d u l e N a m e )   { 
     O l d M o d u l e . c a l l ( t h i s ,   m o d u l e N a m e ) ; 
     t h i s . h o t   =   { 
         d a t a :   m o d u l e . b u n d l e . h o t D a t a , 
         _ a c c e p t C a l l b a c k s :   [ ] , 
         _ d i s p o s e C a l l b a c k s :   [ ] , 
         a c c e p t :   f u n c t i o n ( f n )   { 
             t h i s . _ a c c e p t C a l l b a c k s . p u s h ( f n   | |   f u n c t i o n ( )   { } ) ; 
         } , 
         d i s p o s e :   f u n c t i o n ( f n )   { 
             t h i s . _ d i s p o s e C a l l b a c k s . p u s h ( f n ) ; 
         } , 
     } ; 
     m o d u l e . b u n d l e . h o t D a t a   =   u n d e f i n e d ; 
 } 
 m o d u l e . b u n d l e . M o d u l e   =   M o d u l e ; 
 
 v a r   c h e c k e d A s s e t s   / * :   { | [ s t r i n g ] :   b o o l e a n | }   * / , 
     a c c e p t e d A s s e t s   / * :   { | [ s t r i n g ] :   b o o l e a n | }   * / , 
     a s s e t s T o A c c e p t   / * :   A r r a y < [ P a r c e l R e q u i r e ,   s t r i n g ] >   * / ; 
 
 f u n c t i o n   g e t H o s t n a m e ( )   { 
     r e t u r n   ( 
         H M R _ H O S T   | | 
         ( l o c a t i o n . p r o t o c o l . i n d e x O f ( ' h t t p ' )   = = =   0   ?   l o c a t i o n . h o s t n a m e   :   ' l o c a l h o s t ' ) 
     ) ; 
 } 
 
 f u n c t i o n   g e t P o r t ( )   { 
     r e t u r n   H M R _ P O R T   | |   l o c a t i o n . p o r t ; 
 } 
 
 / /   e s l i n t - d i s a b l e - n e x t - l i n e   n o - r e d e c l a r e 
 v a r   p a r e n t   =   m o d u l e . b u n d l e . p a r e n t ; 
 i f   ( ( ! p a r e n t   | |   ! p a r e n t . i s P a r c e l R e q u i r e )   & &   t y p e o f   W e b S o c k e t   ! = =   ' u n d e f i n e d ' )   { 
     v a r   h o s t n a m e   =   g e t H o s t n a m e ( ) ; 
     v a r   p o r t   =   g e t P o r t ( ) ; 
     v a r   p r o t o c o l   = 
         H M R _ S E C U R E   | | 
         ( l o c a t i o n . p r o t o c o l   = =   ' h t t p s : '   & & 
             ! / l o c a l h o s t | 1 2 7 . 0 . 0 . 1 | 0 . 0 . 0 . 0 / . t e s t ( h o s t n a m e ) ) 
             ?   ' w s s ' 
             :   ' w s ' ; 
     v a r   w s   =   n e w   W e b S o c k e t ( 
         p r o t o c o l   +   ' : / / '   +   h o s t n a m e   +   ( p o r t   ?   ' : '   +   p o r t   :   ' ' )   +   ' / ' , 
     ) ; 
     / /   $ F l o w F i x M e 
     w s . o n m e s s a g e   =   f u n c t i o n ( e v e n t   / * :   { d a t a :   s t r i n g ,   . . . }   * / )   { 
         c h e c k e d A s s e t s   =   ( { }   / * :   { | [ s t r i n g ] :   b o o l e a n | }   * / ) ; 
         a c c e p t e d A s s e t s   =   ( { }   / * :   { | [ s t r i n g ] :   b o o l e a n | }   * / ) ; 
         a s s e t s T o A c c e p t   =   [ ] ; 
 
         v a r   d a t a   / * :   H M R M e s s a g e   * /   =   J S O N . p a r s e ( e v e n t . d a t a ) ; 
 
         i f   ( d a t a . t y p e   = = =   ' u p d a t e ' )   { 
             / /   R e m o v e   e r r o r   o v e r l a y   i f   t h e r e   i s   o n e 
             r e m o v e E r r o r O v e r l a y ( ) ; 
 
             l e t   a s s e t s   =   d a t a . a s s e t s . f i l t e r ( a s s e t   = >   a s s e t . e n v H a s h   = = =   H M R _ E N V _ H A S H ) ; 
 
             / /   H a n d l e   H M R   U p d a t e 
             v a r   h a n d l e d   =   f a l s e ; 
             a s s e t s . f o r E a c h ( a s s e t   = >   { 
                 v a r   d i d A c c e p t   = 
                     a s s e t . t y p e   = = =   ' c s s '   | | 
                     ( a s s e t . t y p e   = = =   ' j s '   & & 
                         h m r A c c e p t C h e c k ( m o d u l e . b u n d l e . r o o t ,   a s s e t . i d ,   a s s e t . d e p s B y B u n d l e ) ) ; 
                 i f   ( d i d A c c e p t )   { 
                     h a n d l e d   =   t r u e ; 
                 } 
             } ) ; 
 
             i f   ( h a n d l e d )   { 
                 c o n s o l e . c l e a r ( ) ; 
 
                 a s s e t s . f o r E a c h ( f u n c t i o n ( a s s e t )   { 
                     h m r A p p l y ( m o d u l e . b u n d l e . r o o t ,   a s s e t ) ; 
                 } ) ; 
 
                 f o r   ( v a r   i   =   0 ;   i   <   a s s e t s T o A c c e p t . l e n g t h ;   i + + )   { 
                     v a r   i d   =   a s s e t s T o A c c e p t [ i ] [ 1 ] ; 
                     i f   ( ! a c c e p t e d A s s e t s [ i d ] )   { 
                         h m r A c c e p t R u n ( a s s e t s T o A c c e p t [ i ] [ 0 ] ,   i d ) ; 
                     } 
                 } 
             }   e l s e   { 
                 w i n d o w . l o c a t i o n . r e l o a d ( ) ; 
             } 
         } 
 
         i f   ( d a t a . t y p e   = = =   ' e r r o r ' )   { 
             / /   L o g   p a r c e l   e r r o r s   t o   c o n s o l e 
             f o r   ( l e t   a n s i D i a g n o s t i c   o f   d a t a . d i a g n o s t i c s . a n s i )   { 
                 l e t   s t a c k   =   a n s i D i a g n o s t i c . c o d e f r a m e 
                     ?   a n s i D i a g n o s t i c . c o d e f r a m e 
                     :   a n s i D i a g n o s t i c . s t a c k ; 
 
                 c o n s o l e . e r r o r ( 
                     ' =ب�  [ p a r c e l ] :   '   + 
                         a n s i D i a g n o s t i c . m e s s a g e   + 
                         ' \ n '   + 
                         s t a c k   + 
                         ' \ n \ n '   + 
                         a n s i D i a g n o s t i c . h i n t s . j o i n ( ' \ n ' ) , 
                 ) ; 
             } 
 
             / /   R e n d e r   t h e   f a n c y   h t m l   o v e r l a y 
             r e m o v e E r r o r O v e r l a y ( ) ; 
             v a r   o v e r l a y   =   c r e a t e E r r o r O v e r l a y ( d a t a . d i a g n o s t i c s . h t m l ) ; 
             / /   $ F l o w F i x M e 
             d o c u m e n t . b o d y . a p p e n d C h i l d ( o v e r l a y ) ; 
         } 
     } ; 
     w s . o n e r r o r   =   f u n c t i o n ( e )   { 
         c o n s o l e . e r r o r ( e . m e s s a g e ) ; 
     } ; 
     w s . o n c l o s e   =   f u n c t i o n ( e )   { 
         i f   ( p r o c e s s . e n v . P A R C E L _ B U I L D _ E N V   ! = =   ' t e s t ' )   { 
             c o n s o l e . w a r n ( ' [ p a r c e l ]   =ب�  C o n n e c t i o n   t o   t h e   H M R   s e r v e r   w a s   l o s t ' ) ; 
         } 
     } ; 
 } 
 
 f u n c t i o n   r e m o v e E r r o r O v e r l a y ( )   { 
     v a r   o v e r l a y   =   d o c u m e n t . g e t E l e m e n t B y I d ( O V E R L A Y _ I D ) ; 
     i f   ( o v e r l a y )   { 
         o v e r l a y . r e m o v e ( ) ; 
         c o n s o l e . l o g ( ' [ p a r c e l ]   ('  E r r o r   r e s o l v e d ' ) ; 
     } 
 } 
 
 f u n c t i o n   c r e a t e E r r o r O v e r l a y ( d i a g n o s t i c s )   { 
     v a r   o v e r l a y   =   d o c u m e n t . c r e a t e E l e m e n t ( ' d i v ' ) ; 
     o v e r l a y . i d   =   O V E R L A Y _ I D ; 
 
     l e t   e r r o r H T M L   = 
         ' < d i v   s t y l e = " b a c k g r o u n d :   b l a c k ;   o p a c i t y :   0 . 8 5 ;   f o n t - s i z e :   1 6 p x ;   c o l o r :   w h i t e ;   p o s i t i o n :   f i x e d ;   h e i g h t :   1 0 0 % ;   w i d t h :   1 0 0 % ;   t o p :   0 p x ;   l e f t :   0 p x ;   p a d d i n g :   3 0 p x ;   f o n t - f a m i l y :   M e n l o ,   C o n s o l a s ,   m o n o s p a c e ;   z - i n d e x :   9 9 9 9 ; " > ' ; 
 
     f o r   ( l e t   d i a g n o s t i c   o f   d i a g n o s t i c s )   { 
         l e t   s t a c k   =   d i a g n o s t i c . c o d e f r a m e   ?   d i a g n o s t i c . c o d e f r a m e   :   d i a g n o s t i c . s t a c k ; 
 
         e r r o r H T M L   + =   ` 
             < d i v > 
                 < d i v   s t y l e = " f o n t - s i z e :   1 8 p x ;   f o n t - w e i g h t :   b o l d ;   m a r g i n - t o p :   2 0 p x ; " > 
                     =ب�  $ { d i a g n o s t i c . m e s s a g e } 
                 < / d i v > 
                 < p r e > 
                     $ { s t a c k } 
                 < / p r e > 
                 < d i v > 
                     $ { d i a g n o s t i c . h i n t s . m a p ( h i n t   = >   ' < d i v > '   +   h i n t   +   ' < / d i v > ' ) . j o i n ( ' ' ) } 
                 < / d i v > 
             < / d i v > 
         ` ; 
     } 
 
     e r r o r H T M L   + =   ' < / d i v > ' ; 
 
     o v e r l a y . i n n e r H T M L   =   e r r o r H T M L ; 
 
     r e t u r n   o v e r l a y ; 
 } 
 
 f u n c t i o n   g e t P a r e n t s ( b u n d l e ,   i d )   / * :   A r r a y < [ P a r c e l R e q u i r e ,   s t r i n g ] >   * /   { 
     v a r   m o d u l e s   =   b u n d l e . m o d u l e s ; 
     i f   ( ! m o d u l e s )   { 
         r e t u r n   [ ] ; 
     } 
 
     v a r   p a r e n t s   =   [ ] ; 
     v a r   k ,   d ,   d e p ; 
 
     f o r   ( k   i n   m o d u l e s )   { 
         f o r   ( d   i n   m o d u l e s [ k ] [ 1 ] )   { 
             d e p   =   m o d u l e s [ k ] [ 1 ] [ d ] ; 
 
             i f   ( d e p   = = =   i d   | |   ( A r r a y . i s A r r a y ( d e p )   & &   d e p [ d e p . l e n g t h   -   1 ]   = = =   i d ) )   { 
                 p a r e n t s . p u s h ( [ b u n d l e ,   k ] ) ; 
             } 
         } 
     } 
 
     i f   ( b u n d l e . p a r e n t )   { 
         p a r e n t s   =   p a r e n t s . c o n c a t ( g e t P a r e n t s ( b u n d l e . p a r e n t ,   i d ) ) ; 
     } 
 
     r e t u r n   p a r e n t s ; 
 } 
 
 f u n c t i o n   u p d a t e L i n k ( l i n k )   { 
     v a r   n e w L i n k   =   l i n k . c l o n e N o d e ( ) ; 
     n e w L i n k . o n l o a d   =   f u n c t i o n ( )   { 
         i f   ( l i n k . p a r e n t N o d e   ! = =   n u l l )   { 
             / /   $ F l o w F i x M e 
             l i n k . p a r e n t N o d e . r e m o v e C h i l d ( l i n k ) ; 
         } 
     } ; 
     n e w L i n k . s e t A t t r i b u t e ( 
         ' h r e f ' , 
         / /   $ F l o w F i x M e 
         l i n k . g e t A t t r i b u t e ( ' h r e f ' ) . s p l i t ( ' ? ' ) [ 0 ]   +   ' ? '   +   D a t e . n o w ( ) , 
     ) ; 
     / /   $ F l o w F i x M e 
     l i n k . p a r e n t N o d e . i n s e r t B e f o r e ( n e w L i n k ,   l i n k . n e x t S i b l i n g ) ; 
 } 
 
 v a r   c s s T i m e o u t   =   n u l l ; 
 f u n c t i o n   r e l o a d C S S ( )   { 
     i f   ( c s s T i m e o u t )   { 
         r e t u r n ; 
     } 
 
     c s s T i m e o u t   =   s e t T i m e o u t ( f u n c t i o n ( )   { 
         v a r   l i n k s   =   d o c u m e n t . q u e r y S e l e c t o r A l l ( ' l i n k [ r e l = " s t y l e s h e e t " ] ' ) ; 
         f o r   ( v a r   i   =   0 ;   i   <   l i n k s . l e n g t h ;   i + + )   { 
             / /   $ F l o w F i x M e [ i n c o m p a t i b l e - t y p e ] 
             v a r   h r e f   / * :   s t r i n g   * /   =   l i n k s [ i ] . g e t A t t r i b u t e ( ' h r e f ' ) ; 
             v a r   h o s t n a m e   =   g e t H o s t n a m e ( ) ; 
             v a r   s e r v e d F r o m H M R S e r v e r   = 
                 h o s t n a m e   = = =   ' l o c a l h o s t ' 
                     ?   n e w   R e g E x p ( 
                             ' ^ ( h t t p s ? : \ \ / \ \ / ( 0 . 0 . 0 . 0 | 1 2 7 . 0 . 0 . 1 ) | l o c a l h o s t ) : '   +   g e t P o r t ( ) , 
                         ) . t e s t ( h r e f ) 
                     :   h r e f . i n d e x O f ( h o s t n a m e   +   ' : '   +   g e t P o r t ( ) ) ; 
             v a r   a b s o l u t e   = 
                 / ^ h t t p s ? : \ / \ / / i . t e s t ( h r e f )   & & 
                 h r e f . i n d e x O f ( w i n d o w . l o c a t i o n . o r i g i n )   ! = =   0   & & 
                 ! s e r v e d F r o m H M R S e r v e r ; 
             i f   ( ! a b s o l u t e )   { 
                 u p d a t e L i n k ( l i n k s [ i ] ) ; 
             } 
         } 
 
         c s s T i m e o u t   =   n u l l ; 
     } ,   5 0 ) ; 
 } 
 
 f u n c t i o n   h m r A p p l y ( b u n d l e   / * :   P a r c e l R e q u i r e   * / ,   a s s e t   / * :     H M R A s s e t   * / )   { 
     v a r   m o d u l e s   =   b u n d l e . m o d u l e s ; 
     i f   ( ! m o d u l e s )   { 
         r e t u r n ; 
     } 
 
     i f   ( a s s e t . t y p e   = = =   ' c s s ' )   { 
         r e l o a d C S S ( ) ; 
         r e t u r n ; 
     } 
 
     l e t   d e p s   =   a s s e t . d e p s B y B u n d l e [ b u n d l e . H M R _ B U N D L E _ I D ] ; 
     i f   ( d e p s )   { 
         v a r   f n   =   n e w   F u n c t i o n ( ' r e q u i r e ' ,   ' m o d u l e ' ,   ' e x p o r t s ' ,   a s s e t . o u t p u t ) ; 
         m o d u l e s [ a s s e t . i d ]   =   [ f n ,   d e p s ] ; 
     }   e l s e   i f   ( b u n d l e . p a r e n t )   { 
         h m r A p p l y ( b u n d l e . p a r e n t ,   a s s e t ) ; 
     } 
 } 
 
 f u n c t i o n   h m r A c c e p t C h e c k ( 
     b u n d l e   / * :   P a r c e l R e q u i r e   * / , 
     i d   / * :   s t r i n g   * / , 
     d e p s B y B u n d l e   / * :   ? {   [ s t r i n g ] :   {   [ s t r i n g ] :   s t r i n g   }   } * / , 
 )   { 
     v a r   m o d u l e s   =   b u n d l e . m o d u l e s ; 
     i f   ( ! m o d u l e s )   { 
         r e t u r n ; 
     } 
 
     i f   ( d e p s B y 